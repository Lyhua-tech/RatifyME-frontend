// React Import
import { useState, useEffect } from "react";

// MUI import
import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Box,
    Stack,
    Pagination,
    useMediaQuery,
} from "@mui/material";

// Custom import
import theme from "../assets/themes";
import StatusCode from "../assets/images/NoData.svg";
import GoldBadge from "../assets/images/DiamondBadge.svg";

const BadgeListCard = ({ badges, onView, roleId }) => {
    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    // Dynamically set items per page based on screen size
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        setItemsPerPage(isLargeScreen ? 8 : isMediumScreen ? 6 : 4);
    }, [isLargeScreen, isMediumScreen]);

    // Determine which badges to display based on the role
    let result = [];
    let issuerName
    if (roleId === 2 || roleId === 1) {
        result = badges;
    } else if (roleId === 3) {
        result = badges?.BadgeClasses;
        issuerName = `${badges?.User?.firstName} ${badges?.User?.lastName}`
    }

    // Pagination handling
    const pageCount = Math.ceil(result?.length / itemsPerPage);
    const currentBadges = result?.slice((page - 1) * itemsPerPage, page * itemsPerPage);
    console.log("Current badges",currentBadges, result);
    const handleChangePage = (_, value) => setPage(value);

    const handleView = (id) => {
        onView(id);
    };

    return (
        <Box my={3}>
            <Typography variant="h6" sx={{ pb: 2 }}>
                Total Badges: {result?.length || 0}
            </Typography>

            {result?.length === 0 ? (
                <Box display="flex" flexDirection="column" alignItems="center" p={4}>
                    <CardMedia
                        component="img"
                        image={StatusCode}
                        alt="No badges found"
                        sx={{ maxWidth: 400, width: "100%" }}
                    />
                    <Typography variant="h6" mt={2} textAlign="center" color={theme.palette.text.secondary}>
                        No badges available
                    </Typography>
                </Box>
            ) : (
                <Grid container spacing={2}>
                    {currentBadges?.map((badge) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={badge?.id}>
                            <Card
                                sx={{
                                    maxWidth: { xss: "100%", sm: 320, md: 340, lg: 350 },
                                    height: { xss: "auto", md: 400 },
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    boxShadow: theme.customShadows.default,
                                    borderRadius: theme.shape.borderRadius,
                                    padding: 1.5,
                                    transition: "transform 0.3s ease",
                                    "&:hover": { transform: "scale(1.02)" },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={badge?.imageUrl || GoldBadge}
                                    alt={badge?.name}
                                    sx={{ objectFit: "cover" }}
                                />
                                <CardContent>
                                    <Stack>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: theme.fontWeight.bold,
                                                overflow: "hidden",
                                                display: "-webkit-box",
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: "vertical",
                                            }}
                                        >
                                            {badge?.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                pt: 1,
                                                color: theme.palette.text.disabled,
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                            }}
                                        >
                                            {/* Display institution name based on the role */}
                                            {/* {roleId === 2 || roleId === 1
                                                ? badge?.Issuer?.Institution?.institutionName
                                                : badge?.Institution?.institutionName} */}
                                            {issuerName}
                                        </Typography>
                                    </Stack>
                                </CardContent>
                                <Box display="flex" justifyContent="flex-end" p={1}>
                                    <Button
                                        sx={{
                                            color: theme.palette.customColors.white,
                                            backgroundColor: theme.palette.primary.main,
                                            textTransform: "none",
                                            fontWeight: theme.fontWeight.bold,
                                            borderRadius: theme.customShape.btn,
                                        }}
                                        onClick={() => handleView(badge?.id)}
                                    >
                                        Visit
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}

            {pageCount > 1 && (
                <Box
                    display="flex"
                    justifyContent="center"
                    mt={3}
                    overflowx={isSmallScreen ? "auto" : "unset"}
                    p={isSmallScreen ? 1 : 0}
                >
                    <Pagination
                        count={pageCount}
                        page={page}
                        onChange={handleChangePage}
                        color="primary"
                        size={isSmallScreen ? "small" : "large"}
                        siblingCount={isSmallScreen ? 0 : 1}
                        boundaryCount={isSmallScreen ? 1 : 2}
                    />
                </Box>
            )}
        </Box>
    );
};

export default BadgeListCard;
