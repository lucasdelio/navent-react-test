import React from 'react';
import {AccordionDetails, AccordionSummary, Accordion} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './ExpansionPanel.module.scss'

export default function MUExpansionPanel ({title, children}) {
    return (
        <Accordion defaultExpanded={true}>
            <AccordionSummary  expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <label className={styles.accordionTitle}>{title && title}</label>
            </AccordionSummary>
            <AccordionDetails  >
                { children }
            </AccordionDetails>
        </Accordion>
    );
}

