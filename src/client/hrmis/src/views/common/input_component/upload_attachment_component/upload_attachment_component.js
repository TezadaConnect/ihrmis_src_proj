import React, { useEffect, useRef, useState } from "react";
import useServiceHooks from "../../../../helpers/use_hooks/service_hooks";

const UploadAttachmentComponent = ({
	formik,
	name,
	isMulti = false,
	type,
	accept,
	value,
	onChange,
}) => {
	const [files, setFiles] = useState([]);
	const fileRef = useRef();
	const [removeElementByClass] = useServiceHooks();

	const removeFile = () => {
		fileRef.current.value = null;
		formik.setFieldValue(name, "");
		setFiles([]);
	};

	const onChangeDisplay = (e) => {
		let arrFiles = [];
		Array.from(e.target?.files)?.forEach((element) => {
			arrFiles.push(element.name);
		});
		setFiles([...arrFiles]);
	};

	// useEffect(() => {
	// 	if (files.length > 0) {
	// 		removeElementByClass("container-file");
	// 	}
	// }, [files]);

	const displayFilename = () => {
		// if (files.length > 0) {
		files?.map((value, id) => {
			console.log("gago: id : " + value);
			return <FileNameViewer text={value} />;
		});
		// } else {
		// 	return <FileNameViewer text="Enter title or name..." />;
		// }
	};

	return (
		<React.Fragment>
			<div className="upload-input-design">
				<div className="div-file-container">
					<div
						className="file-holder"
						onClick={() => {
							fileRef.current.click();
						}}
					>
						{displayFilename()}
					</div>
					{files.length === 0 ? null : (
						<div className="clear-div" onClick={() => removeFile()}>
							<p>Clear</p>
						</div>
					)}
				</div>
				<label htmlFor="upload-attachment">Upload</label>
			</div>

			<input
				ref={fileRef}
				name={name}
				value={value}
				multiple={isMulti}
				id="upload-attachment"
				type={type ?? "file"}
				hidden
				accept={accept}
				onChange={(e) => {
					formik.handleChange(e);
					if (onChange !== null) {
						onChange(e);
					}
					onChangeDisplay(e);
				}}
			/>
		</React.Fragment>
	);
};

export default UploadAttachmentComponent;

const FileNameViewer = ({ text, key }) => {
	return (
		<React.Fragment>
			<div className="container-file" key={key}>
				<p>{text}</p>
			</div>
		</React.Fragment>
	);
};
