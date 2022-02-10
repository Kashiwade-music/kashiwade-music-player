#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod get_dir_data;

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![get_dir_data::get_dir_data])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
