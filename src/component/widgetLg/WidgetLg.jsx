import React from "react";
import "./widgetlg.css";
export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}> {type}</button>;
  };
  return (
    <div className=" widgetlg">
      <h3 className="widgetLgTitle">Lastest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.pravatar.cc/50?img=32"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2023</td>
          <td className="widgetLgAmount">$2233.34</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>{" "}
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.pravatar.cc/50?img=32"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2023</td>
          <td className="widgetLgAmount">$2233.34</td>
          <td className="widgetLgStatus">
            <Button type="Padding" />
          </td>
        </tr>{" "}
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.pravatar.cc/50?img=32"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2023</td>
          <td className="widgetLgAmount">$2233.34</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
          
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.pravatar.cc/50?img=32"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2023</td>
          <td className="widgetLgAmount">$2233.34</td>
          <td className="widgetLgStatus">
            <Button type="Padding" />
          </td>
        </tr>{" "}
      </table>
    </div>
  );
}
