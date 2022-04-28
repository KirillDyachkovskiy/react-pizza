import ContentLoader from 'react-content-loader';

export default function CatalogCardPreloader() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox='0 0 280 460'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <circle cx='130' cy='125' r='120' />
      <rect x='30' y='270' rx='5' ry='5' width='200' height='24' />
      <rect x='0' y='316' rx='10' ry='10' width='280' height='85' />
      <rect x='173' y='381' rx='0' ry='0' width='22' height='4' />
      <rect x='0' y='425' rx='4' ry='4' width='89' height='27' />
      <rect x='125' y='418' rx='20' ry='20' width='155' height='40' />
      <rect x='222' y='424' rx='0' ry='0' width='9' height='21' />
    </ContentLoader>
  );
}
