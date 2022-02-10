use regex::Regex;
use serde_json::json;
use walkdir::WalkDir;

#[tauri::command]
pub fn get_dir_data(dir_path: String) -> serde_json::Value {
  let mut root_object = json!({
      "currentDirPath": "",
      "dirData": []
  });
  root_object["currentDirPath"] = serde_json::Value::String(dir_path.to_string());
  for entry in WalkDir::new(dir_path).into_iter().filter_map(|e| e.ok()) {
    let mut dir_data = json!({
        "name": "",
        "fullPath": "",
        "isDir":false,
        "depth": 0
    });
    if entry.depth() != 0 {
      if entry.file_type().is_dir() {
        dir_data["name"] =
          serde_json::Value::String(entry.file_name().to_string_lossy().to_string());
        dir_data["fullPath"] = serde_json::Value::String(entry.path().display().to_string());
        dir_data["isDir"] = serde_json::Value::Bool(true);
        dir_data["depth"] = serde_json::to_value(entry.depth()).unwrap();
        root_object["dirData"]
          .as_array_mut()
          .unwrap()
          .push(dir_data);
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
  }
  return root_object;
}
