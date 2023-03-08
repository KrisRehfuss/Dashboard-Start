
function TextField() {
  return (
    <div className="text-white font-inter  text-xl ml-[570px] w-[1180px] mx-auto mb-24 flex flex-col flex-grow p-4">
      <textarea
        className="max-h-{200px} p-4 outline-4 text-center bg-coal ClearDrop scrollbar-hide shadow-white shadow-2xl Round h-full w-full resize-none ring-2 ring-coal focus:shadow-sky-500 focus:outline-none focus:border-0 focus:ring-0 focus-visible:ring-0"
        name="Place"
        id=""
        rows={1}
      ></textarea>
    </div>
  );
}

export default TextField