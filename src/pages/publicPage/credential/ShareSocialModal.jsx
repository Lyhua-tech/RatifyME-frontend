import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Stack, Typography } from "@mui/material";
import theme from "../../../assets/themes";

const ShareSocialModal = ({ open, handleClose }) => {
    return (
        <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
            <DialogTitle variant="h4" fontWeight={theme.fontWeight.semiBold} my={2}>
                Share Award
                <Typography color="textSecondary">This will share your Achievement to social media.</Typography>
            </DialogTitle>

            <DialogContent>
                <Stack gap={2}>
                    <Stack
                        component="a"
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=https://directly-upload-s3-bucket-test.s3.ap-southeast-2.amazonaws.com/Certificate/certificate.png&text=Thrilled%20to%20have%20earned%20my%20Unity%20Pro%3A%20Advanced%20Game%20Development%20Techniques%20credential%20from%20CodeDevs!%20Grateful%20for%20the%20opportunity%20to%20grow%20and%20achieve%20this%20milestone.%20%23lifelonglearning%20%23achievement`}
                        target="_blank"
                        flexDirection="row"
                        sx={{
                            border: "1px solid #EDEDED",
                            borderRadius: "8px",
                            minHeight: 80,
                            alignItems: "center",
                            gap: 2,
                            p: 1,
                            textDecoration: "none",
                            "&:hover": {
                                borderColor: "#1A87EC",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderTopLeftRadius: "8px",
                                borderBottomLeftRadius: "8px",
                            }}
                        >
                            <Box
                                alt="Profile"
                                component="img"
                                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                                sx={{ m: 1, width: 40, height: 40 }}
                            />
                        </Box>
                        <Stack>
                            <Typography variant="body1" fontWeight={theme.fontWeight.semiBold} color={theme.palette.text.primary}>
                                Share to Linkedin
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Share your Achievement to Linkedin.
                            </Typography>
                        </Stack>
                    </Stack>

                    <Stack
                        component="a"
                        href={`https://www.facebook.com/sharer/sharer.php?u=https://directly-upload-s3-bucket-test.s3.ap-southeast-2.amazonaws.com/Certificate/certificate.png`}
                        target="_blank"
                        flexDirection="row"
                        sx={{
                            border: "1px solid #EDEDED",
                            borderRadius: "8px",
                            minHeight: 80,
                            alignItems: "center",
                            gap: 2,
                            p: 1,
                            textDecoration: "none",
                            "&:hover": {
                                borderColor: "#1A87EC",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderTopLeftRadius: "8px",
                                borderBottomLeftRadius: "8px",
                            }}
                        >
                            <Box
                                alt="Profile"
                                component="img"
                                src="https://cdn.iconscout.com/icon/free/png-256/free-facebook-logo-icon-download-in-svg-png-gif-file-formats--fb-social-media-70-flat-icons-color-pack-logos-432507.png?f=webp&w=256"
                                sx={{ m: 1, width: 40, height: 40 }}
                            />
                        </Box>
                        <Stack>
                            <Typography variant="body1" fontWeight={theme.fontWeight.semiBold} color={theme.palette.text.primary}>
                                Share to Facebook
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Share your Achievement to Facebook.
                            </Typography>
                        </Stack>
                    </Stack>

                    <Stack
                        component="a"
                        href={`https://twitter.com/intent/tweet?text=Thrilled%20to%20have%20earned%20my%20Unity%20Pro%3A%20Advanced%20Game%20Development%20Techniques%20credential%20from%20CodeDevs!%20%23achievement%20%23Unity%20%23GameDevelopment&url=https://directly-upload-s3-bucket-test.s3.ap-southeast-2.amazonaws.com/Certificate/certificate.png`}
                        target="_blank"
                        flexDirection="row"
                        sx={{
                            border: "1px solid #EDEDED",
                            borderRadius: "8px",
                            minHeight: 80,
                            alignItems: "center",
                            gap: 2,
                            p: 1,
                            textDecoration: "none",
                            "&:hover": {
                                borderColor: "#1A87EC",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderTopLeftRadius: "8px",
                                borderBottomLeftRadius: "8px",
                            }}
                        >
                            <Box
                                alt="Profile"
                                component="img"
                                src="https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10794.jpg"
                                sx={{ m: 1, width: 40, height: 40 }}
                            />
                        </Box>
                        <Stack>
                            <Typography variant="body1" fontWeight={theme.fontWeight.semiBold} color={theme.palette.text.primary}>
                                Share to X
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Share your Achievement to X.
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </DialogContent>
            <Divider />
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ShareSocialModal;
