// MUI component
import { Box, Stack, Typography,} from "@mui/material";

// Custom theme
import BadgeTest from "../../assets/images/badgeTest.png";
import DashboardContainer from "../../components/styles/DashboardContainer";
import { BtnAddTo, BtnIssueTo } from "./BarnerButton";
import PageSection from "./PageSection";

const badgeInfo = {
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "32px",
}

const badgeImages = {
    width: "100%",
    maxWidth: 250,
    maxHeight: 250,
}

const hello = () => {
    return (
        // ============ Start Overview Section ============
        <DashboardContainer>
            <PageSection>
                <Stack
                    component="div"
                    flexDirection={{ xs: "column", md: "row" }}
                    sx={badgeInfo}>
                    <Box
                        component="img"
                        src={BadgeTest}
                        alt="greeting"
                        sx={badgeImages}/>
                    <Box>
                        <Typography>
                            Web Fullstack Development
                        </Typography>
                        <Stack
                            spacing={5} direction="row"
                        >
                            <BtnAddTo />
                            <BtnIssueTo />
                        </Stack>
                    </Box>

                </Stack>

                <Box>
                    <Typography>
                        hi
                    </Typography>
                    <Typography>
                        hi
                    </Typography>
                </Box>

            </PageSection>
        </DashboardContainer>
        // ============ End Overview Section ============
    );
};

export default hello;