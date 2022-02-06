import Content from './Content';
import Hero from './Hero';

export default function Post({ title, date, author, content, slug, heroImg }) {
  const customDate = processDate(date);

  return (
    <>
      <div className='grid grid-cols-12 gap-4'>
        <div hidden>
          <Hero url={heroImg.heroImage.url} />
        </div>
        <div className='col-start-12'>
          <Content articleContent={content} />
        </div>
      </div>
    </>
  );
}

function processDate(date) {
  let newDate =
    date.substring(5, 7) +
    '.' +
    date.substring(8, 10) +
    '.' +
    date.substring(0, 4);
  return newDate;
}
