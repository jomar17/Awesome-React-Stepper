export const apiData: any[] = [
  {
    key: 1,
    property: 'showProgressBar',
    type: 'boolean',
    default: 'true',
    description: `Hide the Progress bar by setting <code>showProgressBar</code> as <code>false</code>. If not provided, Progress Bar will be shown.`,
  },
  {
    key: 2,
    property: 'defaultActiveStep',
    type: 'number',
    default: '1',
    description: `Start your stepper from a particular step by setting <code>defaultActiveStep</code> counting from 1.`,
  },
  {
    key: 3,
    property: 'backBtn',
    type: 'ReactNode',
    default: '-',
    description: `Provide a custom button to navigate to previous step.`,
  },
  {
    key: 4,
    property: 'continueBtn',
    type: 'ReactNode',
    default: '-',
    description: `Provide a custom button to navigate to next step.`,
  },
  {
    key: 5,
    property: 'submitBtn',
    type: 'ReactNode',
    default: '-',
    description: `Provide a custom button that will appear at the last step of the Stepper.`,
  },
  {
    key: 6,
    property: 'onContinue',
    type: '(step) =&gt; void',
    default: '-',
    description: `Trigger when the user clicks on the continue button.`,
  },
  {
    key: 7,
    property: 'onPrev',
    type: '(step) =&gt; void',
    default: '-',
    description: `Trigger when the user clicks on the previous button.`,
  },
  {
    key: 8,
    property: 'onSubmit',
    type: '(step) =&gt; void',
    default: '-',
    description: `Trigger when the user clicks the submit button at last step.`,
  },
  {
    key: 9,
    property: 'btnPos',
    type: 'string',
    default: 'space-between',
    description: `Position of the buttons in the Stepper. <code>center</code> will display the buttons in the center of the Stepper. <code>flex-end</code> will display the buttons at the end of the Stepper and so on.`,
  },
  {
    key: 10,
    property: 'barWidth',
    type: 'string',
    default: '200px',
    description: `Width of the progress bar. <code>200px</code> will display the progress bar with 200px width.`,
  },
  {
    key: 11,
    property: 'strokeColor',
    type: 'string',
    default: '#cdd3d8',
    description: `PrColor of the progress bar. <code>#cdd3d8</code> will display the progress bar with the color of #cdd3d8.`,
  },
  {
    key: 12,
    property: 'fillStroke',
    type: 'string',
    default: '#3a4047',
    description: `Color of the progress bar up to the active step.`,
  },
  {
    key: 13,
    property: 'stroke',
    type: 'number',
    default: '2',
    description: `Width of the progress bar. <code>2</code> will display the progress bar with 2px width.`,
  },
  {
    key: 14,
    property: 'activeColor',
    type: 'string',
    default: '#3A4047',
    description: `Color of the active step circle.`,
  },
  {
    key: 15,
    property: 'activeProgressBorder',
    type: 'string',
    default: '2px solid #f3f4f5',
    description: `Border of the active step circle. <code>2px solid #f3f4f5</code> will display the active step circle with 2px solid border.`,
  },
  {
    key: 16,
    property: 'progressBarClassName',
    type: 'string',
    default: '-',
    description: `Class name of the progress bar.`,
  },
  {
    key: 17,
    property: 'contentBoxClassName',
    type: 'string',
    default: '-',
    description: `Class name of the container below the progress bar.`,
  },
  {
    key: 18,
    property: 'allowClickControl',
    type: 'boolean',
    default: 'true',
    description: `Allow user to click the bar or stepper buttons to navigate to that step.`,
  },
];
