const EditGenderForm = () => {
    return (
        <div>
            <h2>Edit Gender</h2>
            <form>
                <label htmlFor="gender">Gender:</label>
                <input type="text" id="gender" name="gender" />
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditGenderForm;
