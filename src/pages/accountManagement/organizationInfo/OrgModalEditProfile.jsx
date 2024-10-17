// React Library Import
import { useEffect } from "react";
import { useForm } from "react-hook-form";

// MUI Import
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Paper } from "@mui/material";

// Custom Import
import theme from "../../../assets/themes/index";
import FormInput from "../../../components/FormInput";
import { SpinLoading } from "../../../components/loading/SpinLoading";
import PhoneNumberForm from "../../../components/PhoneNumberForm";

// Fetching Data Import
import { useUpdateInstitutionMutation } from "../../../store/api/institutionManagement/institutionApi";

const CustomPaper = (props) => <Paper {...props} sx={{ borderRadius: "16px" }} />;

// =========== Start Edit Profile Modal ===========
const OrgModalEditProfile = ({ open, institutionData, onClose }) => {
    const { handleSubmit, control, reset } = useForm({});

    const [updateOrgProfile, { isLoading, isError }] = useUpdateInstitutionMutation();

    useEffect(() => {
        if (institutionData) {
            reset({
                institutionName: institutionData.institutionName || "",
                institutionEmail: institutionData.institutionEmail || "",
                institutionPhoneNumber: institutionData.institutionPhoneNumber || "",
                institutionWebsiteUrl: institutionData.institutionWebsiteUrl || "",
            });
        }
    }, [institutionData, open, reset]);

    const onSubmit = async (data) => {
        try {
            console.log("payload",data);
            await updateOrgProfile({ id: institutionData.id, updatedData: data }).unwrap();
            onClose();
        } catch (error) {
            console.error("Failed to update profile: ", error);
        } finally {
            reset();
        }
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperComponent={CustomPaper}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
        >
            <DialogTitle sx={{ padding: "20px", fontSize: theme.typography.h4, fontWeight: theme.fontWeight.semiBold }}>
                Organization Information
            </DialogTitle>
            <DialogContent>
                {isError && <p style={{ color: "red" }}>Error updating profile. Please try again.</p>}
                <Box
                    sx={{
                        mt: 2,
                        width: { xs: "280px", sm: "420px", md: "500px" },
                        display: "flex",
                        flexDirection: "column",
                        rowGap: "16px",
                    }}
                    noValidate
                >
                    <FormInput
                        name="institutionName"
                        label="Organization Name"
                        control={control}
                        type="text"
                        required
                    />
                    <FormInput
                        name="institutionEmail"
                        label="Organization Email"
                        control={control}
                        type="email"
                        required
                    />
                    {/* Use PhoneNumberForm component here */}
                    <PhoneNumberForm
                        name="institutionPhoneNumber"
                        label="Organization Phone Number"
                        control={control}
                        required
                    />

                    <FormInput name="institutionWebsiteUrl" label="Organization Website" control={control} />
                </Box>
            </DialogContent>
            <DialogActions sx={{ pb: "20px", pr: "20px" }}>
                <Button onClick={onClose}>Cancel</Button>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ color: theme.palette.customColors.white, borderRadius: theme.customShape.btn }}
                >
                    {isLoading ? <SpinLoading size={20} /> : "Save"}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default OrgModalEditProfile;
// =========== End Edit Profile Modal ===========