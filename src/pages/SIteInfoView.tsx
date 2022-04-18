import { FC } from "react";

import { Card, CardContent, CardHeader, Container } from "@mui/material";
import { Box } from "@mui/system";

const SiteInfoView: FC = () => {



    return (

        <Container>
            <h1>Technical Specs of this site</h1>

            <p>This site was built in spring 2022. It is not perfect, but it is good enough for it's inteded purpose as an online cv. There are no cookies, nor tracking in this site.</p>


            <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>


                <Card variant="elevation" sx={{flex: "0 0 auto", width: "40%"}}>
                    <CardHeader title="Front-End Tech Stack" />
                    <CardContent>
                        <ul>
                            <li><b>TypeScript</b> as the main probramming language</li>
                            <li>React 18 as the main SPA framework</li>
                            <li>Material UI v5 as a component library</li>
                        </ul>
                    </CardContent>
                </Card>


                <Card variant="elevation">
                    <CardHeader title="Infra" />
                    <CardContent>
                        <p>This site runs in XXX</p>
                    </CardContent>
                </Card>


                <Card variant="elevation">
                    <CardHeader title="Tools of trade" />
                    <CardContent>
                        <ul>
                            <li>Visual Studio Code</li>
                            <li>Git</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card variant="elevation">
                    <CardHeader title="Design" />
                    <CardContent>

                        <ul>
                            <li>Anek Odio from Google Fonts, locally provided</li>
                            <li>Coolors.co for color palatte inspirations</li>
                        </ul>
                    </CardContent>
                </Card>

            </Box>



        </Container>


    );
}


export default SiteInfoView;