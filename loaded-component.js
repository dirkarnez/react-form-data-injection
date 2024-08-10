/* 
"module.exports" / "export default" is not needed.
browser version of babel do all the work for us.
*/
function LoadedComponent() {
	const [form, setForm] = React.useState({
		firstName: 'This is firstName',
		lastName: 'This is firstName',
		email: 'this_is_email@email.com',
	  });

	return (
	  <div className="myDiv">
		<label>
			First name:
			<textarea
			value={form.firstName}
			onChange={e => {
				setForm({
				...form,
				firstName: e.target.value
				});
			}}
			/>
		</label>
		<label>
			Last name:
			<input
			value={form.lastName}
			onChange={e => {
				setForm({
				...form,
				lastName: e.target.value
				});
			}}
			/>
		</label>
		<label>
			Email:
			<input
			value={form.email}
			onChange={e => {
				setForm({
				...form,
				email: e.target.value
				});
			}}
			/>
		</label>
		<p>
			{form.firstName}{' '}
			{form.lastName}{' '}
			({form.email})
		</p>
	  </div>
	)
}
