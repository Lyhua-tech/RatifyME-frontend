import { Box, Stack, Typography } from "@mui/material";
import FormatDate from "../../../utils/formatDate";
import theme from "../../../assets/themes";

/**
 * ProfileInfo Component
 *
 * This component dynamically renders profile information based on the provided `profileData` prop.
 * It allows changing the icons and data depending on the user's role or other factors.
 *
 * @param {Array} details - An array of detail objects, where each object contains an icon, title, and value for displaying additional profile information.
 *
 * @returns {JSX.Element} A responsive stack displaying profile information.
 */

// Utility function to get value from nested objects based on a string key path
const getValue = (obj, keyPath) => {
    if (!keyPath || typeof keyPath !== "string") {
        return "N/A"; // Default value if keyPath is undefined
    }

    return keyPath.split(".").reduce((o, k) => (o || {})[k], obj);
};

const ProfileInfo = ({ details, item }) => {
    return (
        <Stack mt={5} spacing={3} justifyContent="start" width="100%">
            {details.map(({ icon, label, valueKey }, index) => {
                const value =
                    label === "Date of Birth" || label === "Plan expired Date"
                        ? FormatDate(getValue(item, valueKey))
                        : getValue(item, valueKey) || "N/A";

                return (
                    <Stack key={index} direction="row" spacing={2} alignItems="center" sx={{ marginBottom: "16px" }}>
                        <Box component="img" src={icon} alt="icon" sx={{ width: 40, height: 40 }} />
                        <Stack sx={{ width: "100%" }}>
                            <Typography
                                sx={{
                                    fontSize: theme.typography.h6.fontSize,
                                    color: theme.palette.text.disabled,
                                    p: 1,
                                }}
                            >
                                {label}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: theme.typography.h5.fontSize,
                                    fontWeight: theme.fontWeight.semiBold,
                                    backgroundColor: theme.palette.background.secondary,
                                    borderRadius: theme.customShape.input,
                                    p: 1,
                                    wordBreak: "break-word",
                                    color: value === "N/A" ? theme.palette.primary.main : "inherit",
                                }}
                            >
                                {value}
                            </Typography>
                        </Stack>
                    </Stack>
                );
            })}
        </Stack>
    );
};

export default ProfileInfo;