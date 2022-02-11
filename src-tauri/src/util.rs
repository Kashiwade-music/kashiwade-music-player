use regex::Regex;
use walkdir::WalkDir;

// 再帰的にディレクトリを探索して、音楽データが存在するかを確認する。
pub fn is_dir_contain_music(dir_path: String) -> bool {
  let re = Regex::new(r".+\.(mp3|wav|ogg|flac|mp4)").unwrap();
  for entry in WalkDir::new(dir_path).into_iter().filter_map(|e| e.ok()) {
    if re.is_match(&entry.file_name().to_string_lossy().to_string()) {
      return true;
    }
  }
  return false;
}
