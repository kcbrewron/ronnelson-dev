import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import markdownStyles from './markdown-styles.module.css';

export default function content({ articleContent }) {
  
  return (
    <>
      <div className='col-span-4 ... relative'>
        <div className={markdownStyles['markdown']}>
          {documentToReactComponents(articleContent.json,'embedded-asset-block')}
        </div>
      </div>
    </>
  );
}