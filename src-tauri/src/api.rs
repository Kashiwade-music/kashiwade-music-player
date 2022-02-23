use chrono::Local;
use once_cell::sync::Lazy;
use regex::Regex;
use serde_json::json;
use std::fs::{self, DirBuilder, OpenOptions};
use std::io::Read;
use std::io::Write;
use tauri::Manager;
use walkdir::WalkDir;

use super::util;

#[derive(Clone, serde::Serialize)]
struct Payload {
  message: serde_json::Value,
}

static DIR_DB: Lazy<sled::Db> = Lazy::new(|| sled::open("./cache/dir_data").unwrap());

#[tauri::command]
pub fn get_dir_data(dir_path: String) -> serde_json::Value {
  if let Ok(Some(res)) = DIR_DB.get(&dir_path) {
    let dt = Local::now();
    println!("{} data found in db", dt.format("%Y/%m/%d/ %H:%M:%S:%6f"));
    let converted = String::from_utf8(res.to_vec()).unwrap();
    return json!(converted);
  }
  println!("data NOT found in db");
  let mut root_object = json!({
      "currentDirPath": "",
      "dirData": []
  });
  root_object["currentDirPath"] = serde_json::Value::String(dir_path.to_string());

  for entry in WalkDir::new(&dir_path)
    .max_depth(1)
    .into_iter()
    .filter_map(|e| e.ok())
  {
    let mut dir_data = json!({
        "name": "",
        "fullPath": "",
        "isDir":false,
        "depth": 0
    });

    if entry.file_type().is_dir() {
      if util::is_dir_contain_music(entry.path().display().to_string()) {
        dir_data["name"] =
          serde_json::Value::String(entry.file_name().to_string_lossy().to_string());
        dir_data["fullPath"] = serde_json::Value::String(entry.path().display().to_string());
        dir_data["isDir"] = serde_json::Value::Bool(true);
        dir_data["depth"] = serde_json::to_value(entry.depth()).unwrap();
        root_object["dirData"]
          .as_array_mut()
          .unwrap()
          .push(dir_data);
      }
    } else {
      let re = Regex::new(r".+\.(mp3|wav|ogg|flac|mp4)").unwrap();
      if re.is_match(&entry.file_name().to_string_lossy().to_string()) {
        dir_data["name"] =
          serde_json::Value::String(entry.file_name().to_string_lossy().to_string());
        dir_data["fullPath"] = serde_json::Value::String(entry.path().display().to_string());
        dir_data["depth"] = serde_json::to_value(entry.depth()).unwrap();
        root_object["dirData"]
          .as_array_mut()
          .unwrap()
          .push(dir_data);
      }
    }
  }
  let final_value = json!(root_object);
  DIR_DB.insert(
    &dir_path,
    serde_json::to_string(&final_value)
      .unwrap()
      .to_string()
      .as_bytes()
      .to_vec(),
  );
  return final_value;
}

#[tauri::command]
pub fn get_lanch_config() -> serde_json::Value {
  DirBuilder::new()
    .recursive(true)
    .create("./config")
    .unwrap();
  let mut file = OpenOptions::new()
    .read(true)
    .write(true)
    .create(true)
    .open("./config/config.json")
    .unwrap();
  let mut contents = String::new();
  file
    .read_to_string(&mut contents)
    // ファイルの読み込み中に問題がありました
    .expect("something went wrong reading the file");

  // テキストは\n{}です
  println!("With text:\n{}", contents);

  if contents.len() == 0 {
    let default_config = json!({"musicDataFolderPath": ["c:/Users/ryo/Music/test"]});
    file
      .write_all(default_config.to_string().as_bytes())
      .unwrap();
    return default_config;
  } else {
    return serde_json::from_str(&contents.to_string()).unwrap();
  }
}
