![REPO SIZE](https://img.shields.io/github/repo-size/getrutd/RUTD-mvp.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/getrutd/RUTD-mvp.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/getrutd/RUTD-mvp.svg?style=social)


# Resources United. Technology Driven. RUTD

## The Virtual Doorstep for Veteran Outreach

_Duration: 200hrs_

Resources United. Technology Driven is a nonprofit organization with two goals. To help Veterans in their transition to civilian life and to quell the epidemic of veteran loss due to suicide.
For the many organizations that offer Veteran outreach, Vets must navigate hurdles, such
as repeatedly providing the same information on applicationss. With RUTD, the Veteran provides personal information only once.
RUTD provides a single registration application, that can be completed in parts over time. After completing the application, the Veteran is matched with organizations that they are elligible for. Eliminating superflous calls for outreach on the part of the Veteran. The veteran can then interface with the organizations with a single click which sends their application to the the organization in question. If the organization requires addtional information, such as a next of kin. They directly communicate to the Veteran these requirements.

![intro](public/images/screenShots/{image}.png)
![intro](public/images/screenShots/{image}.png)

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Nodemailer](https://nodemailer.com/about/)
- [React.js](https://reactjs.org/)
- [React-Redux](https://react-redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [PostgreSQL](https://www.postgresql.org/)

### SETUP

Create your database and tables using the provided `data.sql` file. Start the server.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

## Make Your Call for Outreach

1. From the landing page you are shown your current 'MATCHES', outreach organizations that you elligble to receive assistance from. It is yet empty. In order to create a match, click 'COMPLETE PROFILE INFORMATION'.
You will be routed to the Registration view. A four-panel form where you will provide personal information that will be used in the matching process. Click the 'PERSONAL INFO' panel to get started with the personal information section of the registration form. Input the appropriate information into each of the form fields, then click the SAVE-icon at the bottom of the form to save your progress and complete the personal information section. Select and complete the 'SERVICE HISTORY', 'HEALTH', and 'MISCELLANEOUS' parts in turn, and in the same fashion.

2. Upon completion of the registration form, click 'HOME' on the navbar to return to the Home screen. From Home click 'VIEW NEW MATCHES' to see your Matches. Each Match is represented by a card with a logo of the outreach organization. Click 'MORE INFO' on a card to see a display of information about the organization, such as point of contact(s).  

3. Matches may be edited and/or deleted. From the Home, click on the organizations tab. A table of your matches is displayed; each row representing a match, and containing an 'EDIT', 'EMAIL', and 'DELETE' button. Click 'EDIT' to update the match in question. Clicking 'DELETE' removes the match from your profile.

4. From the Organizations View navigate to the row of the match in question and click the 'EMAIL' button. You will be brought to the Contact Organization view Where you may make your outreach call to the organization in question and attach a personal memo for the organization.

## Acknowledgement
Thanks to Christina Cabrera and Steve jimenez of RUTD for entrusting us with such a noble project. Thank you also to [Prime Digital Academy](www.primeacademy.io) who equipped and helped us to make this application a reality. 

## Support
If you have suggestions or issues, please contact Resources United. Technology Driven: [support@getrutd.com](www.google.com)
