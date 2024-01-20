import { Audio } from 'react-loader-spinner'
import Spinner from 'react-bootstrap/Spinner';

function Pending(props) {
    return (
        <div className="dLoader">
            <div className="loader"></div>
        </div>
        //      <div className="aud">
        //     <Audio
        //         margin="43"
        //         height="150"
        //            width="100"
        //            radius="9"
        //            color="green"
        //            ariaLabel="loading"
        //            wrapperStyle
        //            wrapperClass/>
        // </div>

    );
}

export default Pending;