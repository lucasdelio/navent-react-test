import React from 'react';
import {ExpansionPanelDetails, ExpansionPanelSummary, ExpansionPanel} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function MUExpansionPanel ({title, children}) {
    return (
        <ExpansionPanel defaultExpanded={true}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <h1>{title && title}</h1>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails >
                {children}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}

