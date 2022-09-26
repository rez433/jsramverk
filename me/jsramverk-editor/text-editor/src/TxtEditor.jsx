import ReactQuill from 'react-quill';

const TxtEditor = ({ setValue }) => {

	return (
    	<ReactQuill theme="snow" onChange={setValue} />
	);

}

export default TxtEditor;
