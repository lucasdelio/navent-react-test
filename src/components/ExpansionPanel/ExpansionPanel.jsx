import React from 'react';
import {AccordionDetails, AccordionSummary, Accordion} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function MUExpansionPanel ({title, children}) {
    return (
        <Accordion defaultExpanded={true}>
            <AccordionSummary  expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <h1>{title && title}</h1>
            </AccordionSummary>
            <AccordionDetails  >
                {children}
            </AccordionDetails>
        </Accordion>
    );
}

