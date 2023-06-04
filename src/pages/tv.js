import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout"
import Seo from "../components/seo"

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';

import {
    Button,
    Frame,
    Toolbar,
    Window,
    WindowContent,
    WindowHeader
} from "react95";

const styles = {
    window: "w-full h-full"
};

const TVPage = () => (
    <ThemeProvider theme={original}>
        <div className="flex m-16 gap-x-4 h-full">

            <div className="flex-1">
                <Window className={styles.window}>
                    <WindowHeader>
                        <span>quackbox.exe</span>
                    </WindowHeader>
                    <WindowContent>
                        Quacks!
                    </WindowContent>
                </Window>
            </div>

            <div className="flex-none w-64">
                <Window className={styles.window}>
                    <WindowHeader>
                        <span>players.exe</span>
                    </WindowHeader>
                    <WindowContent>
                        Players:
                    </WindowContent>
                </Window>
            </div>

        </div>
    </ThemeProvider>
);

export const Head = () => <Seo title="Quackbox" />

export default TVPage
