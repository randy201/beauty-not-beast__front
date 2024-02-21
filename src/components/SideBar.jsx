/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SideBar({ sidebarData }) {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState(0);

  // Function to handle tab change
  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  // Function to generate the sidebar links
  const renderSidebarLinks = () => {
    return (
      <div>
        <div>Logo</div>
        <div>
          {sidebarData.map((item, index) => (
            <Link
              key={index}
              className={`list-link list-group-item list-group-item-action ${
                index === activeTab ? "active active-tab" : ""
              }`}
              onClick={() => handleTabChange(index)}
              id={`list-${item.id}-list`}
              data-bs-toggle="list"
              href={`#${item.id}`}
              role="tab"
              aria-controls={`list-${item.id}`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  // Function to generate the content for each tab
  const renderTabContent = () => {
    return sidebarData.map((item, index) => (
      <div
        key={index}
        className={`tab-pane fade ${index === activeTab ? "show active" : ""}`}
        id={`list-${item.id}`}
        role="tabpanel"
        aria-labelledby={`list-${item.id}-list`}
      >
        {item.content}
      </div>
    ));
  };

  return (
    <div className="row col-12">
      <div className="col-2 sidebar">
        <div className="list-group" id="list-tab" role="tablist">
          {renderSidebarLinks()}
        </div>
      </div>

      <div className="col-10">
        <div className="tab-content" id="nav-tabContent">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}
