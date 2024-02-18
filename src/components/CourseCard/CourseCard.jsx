import { IoBookOutline } from "react-icons/io5";
import { TfiMoney } from "react-icons/tfi";
import PropTypes from 'prop-types';

const CourseCard = ({ courseCard, handleAddCourseCard }) => {
    const { img, course, details, price, credit } = courseCard;
    return (
        <div className='pb-6'>
            <div className=' card card-compact w-72 bg-base-100 shadow-xl p-4 rounded-md bg-white h-full '>
                <img className='rounded-md h-36 w-full' src={img} alt="" />
                <div>
                    <h3 className='text-xl font-semibold py-3'>{course}</h3>
                    <p className='text-slate-700'>{details}</p>
                </div>
                    <div className='flex justify-between py-2'>
                        <div className="flex items-center">
                            <h2 className="text-lg pr-2"><TfiMoney></TfiMoney></h2>
                            <p className='font-semibold text-slate-600'>Price: <span>{price}</span></p>
                        </div>
                        <div className="flex  items-center">
                            <h2 className="pr-2 text-lg"><IoBookOutline></IoBookOutline></h2>
                            <p className='font-semibold text-slate-600'>Credit: <span>{credit}</span>hr</p>
                        </div>
                    </div>
                        <div>
                        <button onClick={() => handleAddCourseCard(courseCard)} className='w-full p-2 text-white rounded-md font-semibold bg-blue-600'>Select</button>
                        </div>
                    </div>
            </div>
    );
};

CourseCard.propTypes = {
    courseCard: PropTypes.object,
    handleAddCourseCard: PropTypes.func
}

export default CourseCard;