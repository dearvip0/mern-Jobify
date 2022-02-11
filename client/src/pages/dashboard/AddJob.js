import React from 'react';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useAppContext } from '../../context/appContext';
import { Alert, FormRow, FormRowSelect } from '../../components';
const AddJob = () => {
	const {
		isEditing,
		showAlert,
		displayAlert,
		position,
		company,
		jobLocation,
		jobType,
		jobTypeOptions,
		status,
		statusOptions,
		handleChange,
		clearValues,
		createJob,
		editJob,
	} = useAppContext();

	const handleJobInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		handleChange({ name, value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!position || !company || !jobLocation) {
			displayAlert();
		}
		if (isEditing) {
			editJob();
			return;
		}
		createJob();
	};
	return (
		<Wrapper>
			<form className='form' onSubmit={handleSubmit}>
				<h3>{isEditing ? 'edit job' : 'add job'}</h3>
				{showAlert && <Alert />}
				<div className='form-center'>
					<FormRow
						type='text'
						name='position'
						value={position}
						handleChange={handleJobInput}
					/>
					{/* company */}
					<FormRow
						type='text'
						name='company'
						value={company}
						handleChange={handleJobInput}
					/>
					{/* location */}
					<FormRow
						type='text'
						labelText='job location'
						name='jobLocation'
						value={jobLocation}
						handleChange={handleJobInput}
					/>
					{/* {status} */}
					<FormRowSelect
						labelText='Status'
						name='status'
						value={status}
						handleChange={handleJobInput}
						list={statusOptions}
					/>
					{/* {jobType} */}
					<FormRowSelect
						labelText='Type'
						name='jobType'
						value={jobType}
						handleChange={handleJobInput}
						list={jobTypeOptions}
					/>
					<div className='btn-container'>
						<button className='btn btn-block submit-btn' onClick={handleSubmit}>
							submit
						</button>
						<button
							className='btn btn-block clear-btn'
							onClick={(e) => {
								e.preventDefault();
								clearValues();
							}}>
							clear
						</button>
					</div>
				</div>
			</form>
		</Wrapper>
	);
};

export default AddJob;
