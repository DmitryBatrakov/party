export default function Footer() {
  return (
    <footer className=" bg-rose-300 w-full flex flex-col gap-4 items-center justify-between p-2">
      <div className="w-full h-auto flex flex-col justify-between items-center gap-2">
        <span className="text-sm">
          Тут можно загрузить и скачать фотографии с девичника
        </span>
        <a
          className="px-2 py-1 bg-white rounded-lg text-rose-300 text-sm"
          target="_blank"
          href="https://drive.google.com/drive/folders/1gY-VZMZ0x9C2gXeuBuLKwuHztxFakCDD"
          rel="noopener noreferrer"
        >
          Открыть папку
        </a>
      </div>
      <div>
        <span className="text-white text-sm">© 2025 Девичник Катюши 💕</span>
      </div>
    </footer>
  );
}
