#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod api;
mod util;

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![
      api::get_lanch_config,
      api::get_dir_data
    ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
