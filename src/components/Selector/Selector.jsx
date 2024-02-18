import PropTypes from 'prop-types';

const Selector = ({ selector, index }) => {
    const { course } = selector;
    console.log(selector);
    const count = index + 1;
    return (

        <div>
            <h3 className='text-md text-slate-600'>{count} : {course}</h3>

        </div>
    );
};

Selector.propTypes = {
    selector: PropTypes.object,
    index: PropTypes.any
}

export default Selector;