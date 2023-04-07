interface GalleryData {
  title: string;
  itemsList: Array<any>;
  viewAllLink: string;
}

const GridGallery = (data: GalleryData) => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl">{data.title}</h2>
      <div>{data.itemsList}</div>
      <a
        className="rounded-md bg-slate-900 px-6 py-3 text-white shadow-md"
        href={data.viewAllLink}
      >
        VIEW ALL
      </a>
    </section>
  );
};

export default GridGallery;
