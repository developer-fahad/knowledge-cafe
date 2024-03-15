import PropTypes from 'prop-types';
import { BsBookmark } from "react-icons/bs";
const Blog = ({blog, handleBookmarks}) => {
    // console.log(blog);
    const {title, cover_img, author_img, reading_time, author_name,posted_date, hashtags} = blog;
    return (
        <div className='pr-5 mb-12 '>
            <img src={cover_img} alt="" />
            <div className='flex justify-between py-4'>
                <div className='flex items-center gap-4'>
                    <img className='h-16 w-16 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-lg font-bold'>{author_name}</h3>
                        <p className='text-sm text-slate-600'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-1 '>
                    <p className='text-base text-slate-600'><span className='font-bold text-black'>{reading_time}</span> min read</p>
                    <button onClick={handleBookmarks} className='text-xl'><BsBookmark /></button>
                </div>
            </div>
            <h2 className='text-5xl font-bold py-3'>{title}</h2>
            <div className='py-3'>
            {
                hashtags.map((hash, idx) => <span key={idx} className='mr-2 text-slate-500'><a href="">#{hash}</a></span>)
            }
            </div>
            
            <button className='underline font-bold text-violet-600'>Mark As Read</button>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;