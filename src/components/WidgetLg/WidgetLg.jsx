import React from 'react'
import './WidgetLg.css'
const WidgetLg = () => {

    const Button = ({ type }) => {
        return <button className={'widgetButton' + type}>{type}</button>
    }
    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Latest Trannsactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>

                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>

                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://source.unsplash.com/800x450/?grizzly" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Ankur Srivastava</span>
                    </td>
                    <td className="widgetLgDate">21 July</td>
                    <td className="widgetLgAmount">Rs 3000000</td>
                    <td className="widgetLgStatus">Approved</td>
                    <td className="widgetLgStatus">
                        <Button type='Approved' />
                    </td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://source.unsplash.com/800x450/?grizzly" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Ankur Srivastava</span>
                    </td>
                    <td className="widgetLgDate">21 July</td>
                    <td className="widgetLgAmount">Rs 3000000</td>
                    <td className="widgetLgStatus">Approved</td>
                    <td className="widgetLgStatus">
                        <Button type='Declined' className='widgetLgButton' />
                    </td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://source.unsplash.com/800x450/?grizzly" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Ankur Srivastava</span>
                    </td>
                    <td className="widgetLgDate">21 July</td>
                    <td className="widgetLgAmount">Rs 3000000</td>
                    <td className="widgetLgStatus">Pending</td>
                    <td className="widgetLgStatus">
                        <Button type='Pending' />
                    </td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://source.unsplash.com/800x450/?grizzly" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Ankur Srivastava</span>
                    </td>
                    <td className="widgetLgDate">21 July</td>
                    <td className="widgetLgAmount">Rs 3000000</td>
                    <td className="widgetLgStatus">Rejected</td>
                    <td className="widgetLgStatus">
                        <Button type='Approved' />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg
