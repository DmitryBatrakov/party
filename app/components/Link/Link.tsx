export default function Link() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center gap-6 border border-rose-300 rounded-xl p-2">
      <span className=" text-center text-rose-300">
        Тут можно загрузить и скачать фотографии с девичника
      </span>
      <a
        className="px-3 py-2 bg-rose-300 rounded-lg text-white text-sm"
        target="_blank"
        href="https://drive.google.com/drive/folders/1gY-VZMZ0x9C2gXeuBuLKwuHztxFakCDD"
        rel="noopener noreferrer"
      >
        Открыть диск
      </a>
    </div>
  );
}
