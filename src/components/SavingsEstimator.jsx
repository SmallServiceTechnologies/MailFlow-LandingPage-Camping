import React, { useState } from "react";
import "../css/savingsEstimator.css";
import FormInput from "./FormInput.jsx";
import CTABtn from "./CTABtn.jsx";
import Accordion from "./Accordion.jsx";

export default function SavingsEstimator() {
    const [potentialUsers, setPotentialUsers] = useState(1);
    const [avgEmailsPerDayPerUser, setAvgEmailsPerDayPerUser] = useState(10);
    const [avgProcessingTimePerEmail, setAvgProcessingTimePerEmail] = useState(7);
    const [automationRate, setAutomationRate] = useState(80);

    const [selectedSalary, setSelectedSalary] = useState('2.500 €');

    const salaryOptions = [
        { salary: '2.500 €', costPerMinute: 0.37 },
        { salary: '3.000 €', costPerMinute: 0.44 },
        { salary: '4.000 €', costPerMinute: 0.58 },
        { salary: '5.000 €', costPerMinute: 0.73 },
    ];

    const handleRadioChange = (event) => {
        setSelectedSalary(event.target.value);
    };

    const handlePotentialUsersChange = (event) => {
        setPotentialUsers(parseInt(event.target.value));
    };

    const handleAvgEmailsPerDayPerUserChange = (event) => {
        setAvgEmailsPerDayPerUser(parseInt(event.target.value));
    };

    const handleAvgProcessingTimePerEmailChange = (event) => {
        setAvgProcessingTimePerEmail(parseInt(event.target.value));
    };

    const handleAutomationRateChange = (event) => {
        setAutomationRate(parseInt(event.target.value));
    };

    const selectedSalaryObj = salaryOptions.find(opt => opt.salary === selectedSalary);
    const costPerMinute = selectedSalaryObj ? selectedSalaryObj.costPerMinute : 0.44;

    // Calculations
    const totalEmailsPerDay = potentialUsers * avgEmailsPerDayPerUser;
    const automatedEmailsPerDay = totalEmailsPerDay * (automationRate / 100);

    const manualTimePerEmail = avgProcessingTimePerEmail;
    const automatedTimePerEmail = 1; // fixed 1 minute per automated email (as in case study)

    const timeWithoutAutomationPerDay = totalEmailsPerDay * manualTimePerEmail;
    const timeWithAutomationPerDay = automatedEmailsPerDay * automatedTimePerEmail + (totalEmailsPerDay - automatedEmailsPerDay) * manualTimePerEmail;

    const timeSavedPerDay = timeWithoutAutomationPerDay - timeWithAutomationPerDay;
    const timeSavedPerMonth = timeSavedPerDay * 20; // 20 workdays

    const costSavedPerMonth = timeSavedPerMonth * costPerMinute;

    return (
        <div id="savingsEstimator">
            <h3 className="section-heading gradient-text">Estimate your savings</h3>
                <div className="Nx2">
                    <div className="card">
                        <div className="Nx2">
                        <div className="container">
                            <Accordion
                                title="Number of potential users"
                                content="Enter the approximate number of employees in your organisation who are activly working on answering customer emails"
                            />
                            <FormInput
                                type="number"
                                value={potentialUsers}
                                onChange={handlePotentialUsersChange}
                                required={true}
                            />
                        </div>

                        <div className="container">
                            <Accordion
                                title="Emails per day per user"
                                content="Enter the approximate average number of customer emails each service or sales employee receives per day"
                            />
                            <FormInput
                                type="number"
                                value={avgEmailsPerDayPerUser}
                                onChange={handleAvgEmailsPerDayPerUserChange}
                                required={true}
                            />
                        </div>

                        <div className="container">
                            <Accordion
                                title="Manual processing time per email (minutes)"
                                content="Enter the approximate average processing time in minutes a employee needs to resolve a customers email inquery."
                            />
                            <FormInput
                                type="number"
                                value={avgProcessingTimePerEmail}
                                onChange={handleAvgProcessingTimePerEmailChange}
                                required={true}
                            />
                        </div>

                        <div className="container">
                            <Accordion
                                title="Expected automation rate (%)"
                                content="Enter the expected percentage of all incoming emails that can be replied to using mailflow. From experience 80% - 90% is realistic."
                            />
                            <FormInput
                                type="number"
                                value={automationRate}
                                onChange={handleAutomationRateChange}
                                required={true}
                            />
                        </div>
                        </div>
                        <br></br>
                        <Accordion
                            title="Monthly gross salary per user"
                            content="Choose the gross salary a normal customer service or sales employee receives per month. The approximated costs per minute inlcue non-wage labor costs."
                        />
                        <div className="salary Nx2">
                            {salaryOptions.map((option) => (
                                <div key={option.salary}>
                                    <input
                                        type="radio"
                                        id={option.salary}
                                        name="salary"
                                        value={option.salary}
                                        checked={selectedSalary === option.salary}
                                        onChange={handleRadioChange}
                                    />
                                    <label htmlFor={option.salary}> {option.salary} ~ {option.costPerMinute.toFixed(2)} € per minute</label>
                                </div>
                            ))}
                        </div>
                    </div>
                <div className="card">
                    <h3 className="gradient-text">Your potential savings</h3>
                    <table>
                        <tbody>
                        <tr>
                            <td><strong>Automated emails per day</strong></td>
                            <td>{Math.round(automatedEmailsPerDay)}</td>
                        </tr>
                        <tr>
                            <td><strong>Total time saved per day</strong></td>
                            <td>{Math.round(timeSavedPerDay)} minutes</td>
                        </tr>
                        <tr>
                            <td><strong>Total time saved per month</strong></td>
                            <td>{Math.round(timeSavedPerMonth)} minutes</td>
                        </tr>
                        <tr>
                            <td><strong>Total time saved per year</strong></td>
                            <td>{Math.round(timeSavedPerMonth * 12) / 60} hours</td>
                        </tr>
                        <tr>
                            <td><strong>Estimated cost savings per month</strong></td>
                            <td>{costSavedPerMonth.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</td>
                        </tr>
                        <tr>
                            <td><strong>Estimated cost savings per year</strong></td>
                            <td>{(costSavedPerMonth * 12).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</td>
                        </tr>
                        </tbody>
                    </table>
                    <CTABtn></CTABtn>
                </div>
            </div>
        </div>
    );
}
