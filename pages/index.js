import Classes from "../styles/Home.module.css";
import HomeIcon from "@material-ui/icons/Home";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import StarIcon from "@material-ui/icons/Star";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SearchIcon from "@material-ui/icons/Search";
import Table from "../components/Table";
import { Avatar } from "@material-ui/core";

export default function Home() {
  return (
    <div>
      <div id={Classes.page1}>
        <div id={Classes.sideBar1} style={{ paddingTop: "1rem" }}>
          <img
            style={{ float: "left" }}
            width="20%"
            src="https://s3-alpha-sig.figma.com/img/58d1/4412/47e26c7697a61869f91f4f62fbf2e2c9?Expires=1629676800&Signature=d-dwdWn2WJOZWwprleLn3VBT8mtxdTjmGtExX65r5YN8HFI7TE~UdDNWfshfNjuAB1rN3Cd2Wvkb-DgUMTn0vzgK4TrcfBvnVt3CEqO~-NO6pCAcZNnyuCRM4oaRYc91b9k0tEyfSOwGXteLhYXLZopx-pAjLQ6MWPFl4GIi~ppMzgEKsCNblqV1bMKY2aUEpwrzyx~xXqD2OXYYE6D97YJ~O0d3OOgqDaW6JKGCMjOOrVtgVBoOuc0EMP7x2hehGJn8K7EcoLiU0PNMEB~pGielWWqVTF0a7fqzhbX9iizlWw7H2KrOl5d4j70GLRvu6U3Cehg-c-4V5P-eW2~lhQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />
          <span
            style={{
              float: "right",
              fontSize: "1.8vw",
              width: "11rem",
              paddingTop: "0.8vw",
            }}
          >
            Term<strong>Monitor</strong>
          </span>
        </div>
        <div id={Classes.content1}>
          <div className={Classes.topnav}>
            <a className={Classes.active}>
              <h2>KEYWORDS</h2>
            </a>

            <div className={Classes["search-container"]}>
              <form>
                <input
                  type="text"
                  name="search"
                  placeholder="submit →"
                  style={{ marginRight: "5vw", marginTop: "1.5vw" }}
                ></input>
                <Avatar
                  style={{
                    float: "right",
                    marginTop: "1vw",
                    marginRight: "1.4vw",
                  }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div id={Classes.page}>
        <div id={Classes.sideBar}>
          <div
            style={{ background: "rgb(70, 3, 70)", color: "white" }}
            className={Classes.sidebarDiv}
          >
            <HomeIcon /> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;{" "}
            <span>Add Keywords</span>
          </div>
          <div style={{ color: "gray" }} className={Classes.sidebarDiv}>
            <PeopleAltIcon />{" "}
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;{" "}
            <span>Matches</span>
          </div>
          <div style={{ color: "gray" }} className={Classes.sidebarDiv}>
            <CreditCardIcon />{" "}
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;{" "}
            <span>Manage Sources</span>
          </div>
          <div style={{ color: "gray" }} className={Classes.sidebarDiv}>
            <CreditCardIcon />{" "}
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;{" "}
            <span>Integrations</span>
          </div>
          <div style={{ color: "gray" }} className={Classes.sidebarDiv}>
            <CreditCardIcon />{" "}
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;{" "}
            <span>Alerts</span>
          </div>

          <div style={{ color: "gray" }} className={Classes.sidebarDiv}>
            <StarIcon /> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;{" "}
            <span>Settings</span>
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;{" "}
            <KeyboardArrowDownIcon />
            <p style={{ paddingLeft: "10%" }}>Billing</p>
          </div>
        </div>
        <div
          style={{ paddingTop: "3vw", paddingLeft: "3vw" }}
          id={Classes.content}
        >
          <h4
            style={{ float: "right", fontWeight: "bold", marginRight: "9vw" }}
          >
            Advance Search
          </h4>
          <h4>
            Add Another Keyword{" "}
            <span
              style={{
                marginRight: "1vw",
                marginLeft: "1vw",
                background: "rgb(70, 3, 70)",
                paddingRight: "1vw",
                paddingLeft: "1vw",
                color: "white",
              }}
            >
              1/3
            </span>{" "}
            UPGRADE
          </h4>
          <form className={Classes.search}>
            <div className={Classes.searchInput}>
              <SearchIcon className={Classes.searchInputIcon} />
              <input placeholder="Enter your Filters here" />
              <button className={Classes.contentBtn}>save filters</button>
            </div>
          </form>

          <div
            style={{
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "10%",
            }}
          >
            <p style={{ fontWeight: "bold", float: "left" }}>
              The terms you are tracking
            </p>
            <p style={{ float: "right" }}>The data will refresh every 5 min</p>

            {/*Table Component */}
            </div>
            <div style={{ width: "80%",
            marginLeft: "auto",
            marginRight: "auto",}}>
            <Table />
            </div>
          <div
            style={{
              marginTop: "6%",
              textAlign: "center",
              fontWeight: "bolder",
            }}
          >
            <button className={Classes.contentBtn}>View Results</button>
          </div>
        </div>
      </div>
    </div>
  );
}
