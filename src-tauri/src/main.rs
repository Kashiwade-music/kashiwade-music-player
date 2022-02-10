#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use serde_json::json;
use std::fs::{self, DirBuilder, OpenOptions};
use std::io::Read;
use std::io::Write;
use tauri::Manager;
mod get_dir_data;

#[derive(Clone, serde::Serialize)]
struct Payload {
  message: serde_json::Value,
}

#[tauri::command]
fn get_lanch_config() -> serde_json::Value {
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
    let default_config = json!({"musicDataFolderPath": "~/Music"});
    file
      .write_all(default_config.to_string().as_bytes())
      .unwrap();
    return default_config;
  } else {
    return json!(contents);
  }
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![
      get_lanch_config,
      get_dir_data::get_dir_data
    ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
