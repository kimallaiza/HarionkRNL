import DeleteGenderForm from "../../components/forms/DeleteGenderForm";
import MainLayout from "../layout/MainLayout";

const DeleteGender = () => {
    const content = (
        <div className="row">
            <div className="col-md-12">
                <DeleteGenderForm />
            </div>
        </div>
    );

    return <MainLayout content={content} />;
};

export default DeleteGender;
