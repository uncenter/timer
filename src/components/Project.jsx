import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";

export default function Project() {
    return(
        <div className="project">
            <a href="https://github.com/uncenter/timer" target="_blank" rel="noopener noreferrer"><button className="github special"><Icon path={mdiGithub} size={1} /></button></a>
        </div>
    );
}
