import PropTypes from 'prop-types'
import Selector from '../Selector/Selector';
const Bookmark = ({ bookmark }) => {
    const {price, credit} = bookmark;
    return (
        <div>
            <div className='bg-white p-4 rounded-md shadow-md'>
                <p className='text-blue-700 font-semibold text-lg'>Credit Hour Remaining <span></span>hr</p>
                <h2 className='font-bold text-xl pt-3 pb-5'>Course Name</h2>
                {
                    bookmark.map((selector, index) => <Selector key={selector.id} index={index} selector={selector}></Selector>)
                }
                <p className=' border-b-2 border-t-2 py-3'>Total Credit Hour:{credit}</p>
                <h4 className=' py-3'>Total Price:{price}</h4>
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.array
}

export default Bookmark;