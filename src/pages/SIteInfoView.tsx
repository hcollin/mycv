import { FC } from "react";

import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

const SiteInfoView: FC = () => {



    return (
        
            <Container>
                <h1>Technical Specs of this site</h1>

                <p>This site was built in spring 2022.</p>

                <h2>Front End Tech Stack</h2>

                <ul>
                    <li>React 18</li>
                    <li>Material UI</li>
                    <li>Sass</li>
                    <li>TypeScript</li>
                </ul>

                <h2>Infra</h2>

                <p>This site runs in XXX</p>



            </Container>

        
    );
}


export default SiteInfoView;