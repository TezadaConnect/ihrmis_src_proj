import React from "react";
import ButtonComponent from "../../common/button_component/button_component";
import {
  AiOutlineDelete,
  AiOutlineDown,
  AiOutlineEdit,
  AiOutlineMenu,
  AiOutlinePlus,
  AiOutlineUp,
} from "react-icons/ai";
import IconComponent from "../../common/icon_component/icon";
import { useState } from "react";
import DropdownIconComponent from "./dropdown_icon_component";
import SelectComponent from "../../common/input_component/select_component/select_component";
import {
  Actions,
  dateList,
  functionList,
} from "../static/performance_data_list";
import ModalComponent from "../../common/modal_component/modal_component";
import { IoLocationSharp } from "react-icons/io5";

export const MfoTable = ({ columns }) => {
  // const [dateValue, setDateValue] = useState(dateDropdownData.label);
  // const options = useMemo(dateDropdownData);

  const [toggle, setToggle] = useState(false);

  const [subRows, setSubRows] = useState([]);

  function stringToArray(str) {
    const arr = str.split(",");
    return arr.map((item) => (
      <>
        <span>{item}</span> <br />
      </>
    ));
  }

  const toggleSubRows = (id) => {
    const shownState = subRows.slice();
    const index = shownState.indexOf(id);

    if (index >= 0) {
      shownState.splice(index, 1);
      setSubRows(shownState);
    } else {
      shownState.push(id);
      setSubRows(shownState);
    }
  };

  return (
    <div>
      <div className="text-end">
        <span>For Revision</span>
      </div>
      <div className="button-position">
        <ButtonComponent
          buttonLogoStart={<AiOutlinePlus />}
          buttonName="NEW"
          onClick={<ModalComponent></ModalComponent>}
        />

        <div className="select-container">
          <SelectComponent itemList={dateList} className="select" />
          <SelectComponent itemList={functionList} className="select" />
        </div>
      </div>
      <div className="table-container">
        <table className="table-content">
          <thead>
            <tr>
              <th>Project/Activity</th>
              <th>MFO (O/DPCR Level)</th>
              <th>Success Indicator</th>
              <th colSpan={2}>
                Performance Measures
                <p style={{ fontSize: "0.75em" }}>
                  E-fficiency, Q-uality, T-imeliness
                </p>
              </th>
              {/* <th></th> */}
              <th>Performance Targets</th>
              <th>Performance Standards</th>
            </tr>
          </thead>
          <tbody>
            {columns.map((item, index) => (
              <React.Fragment>
                <tr key={item.prj_id}>
                  <td colSpan={7}>
                    <div className="flex-between">
                      <div className="flex">
                        <DropdownIconComponent
                          dropdownLogo={<AiOutlineMenu />}
                          itemList={Actions}
                        />
                        <span style={{ color: "black", paddingLeft: "10px" }}>
                          {item.prj_title}
                        </span>
                      </div>
                      <div onClick={() => toggleSubRows(item.prj_id)}>
                        <span>
                          {subRows.includes(item.prj_id) ? (
                            <AiOutlineDown />
                          ) : (
                            <AiOutlineUp />
                          )}
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
                {subRows.includes(item.prj_id) &&
                  item.mfo_info.map((mfo_item, mfo_index) => (
                    <React.Fragment>
                      <tr key={mfo_item.mfo_id}>
                        <td className="no-border"></td>
                        <td colSpan={6}>
                          <div className="flex-between">
                            <div className="flex">
                              <DropdownIconComponent
                                dropdownLogo={<AiOutlineMenu />}
                                itemList={Actions}
                              />
                              <span
                                style={{ color: "black", paddingLeft: "10px" }}
                              >
                                {mfo_item.mfo_title}
                              </span>
                            </div>
                            <div
                              onClick={() =>
                                toggleSubRows(
                                  Number(item.prj_id + "." + mfo_item.mfo_id)
                                )
                              }
                            >
                              <span>
                                {subRows.includes(
                                  Number(item.prj_id + "." + mfo_item.mfo_id)
                                ) ? (
                                  <AiOutlineDown />
                                ) : (
                                  <AiOutlineUp />
                                )}
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      {subRows.includes(
                        Number(item.prj_id + "." + mfo_item.mfo_id)
                      ) &&
                        mfo_item.mfo_ind_info.map((ind_item, ind_index) => (
                          <React.Fragment>
                            <tr key={ind_item.ind_id}>
                              <td className="no-border"></td>
                              <td className="no-border"></td>
                              <td
                                className="no-border-btm"
                                rowSpan={3}
                                style={{ padding: "0" }}
                              >
                                <div className="flex">
                                  <div style={{ paddingBottom: "0.5em" }}>
                                    <DropdownIconComponent
                                      dropdownLogo={<AiOutlineMenu />}
                                      itemList={Actions}
                                    />
                                  </div>
                                  <IoLocationSharp className="red absolute right-comment-mfo-2 pointer" />
                                  <span
                                    style={{
                                      paddingLeft: "0.5em",
                                      color: "black",
                                    }}
                                  >
                                    {ind_item.ind_title}
                                  </span>
                                </div>
                              </td>
                              <td className="letter">
                                <span>
                                  {
                                    ind_item.ind_performance[0]
                                      .performance_metric
                                  }
                                </span>
                              </td>
                              <td>
                                <IoLocationSharp className="red absolute right-comment-mfo-1 pointer" />
                                <span className="black">
                                  {
                                    ind_item.ind_performance[0]
                                      .performance_measure
                                  }
                                </span>
                              </td>
                              <td>
                                <IoLocationSharp className="red absolute right-comment-mfo pointer" />
                                <span className="black">
                                  {
                                    ind_item.ind_performance[0]
                                      .performance_target
                                  }
                                </span>
                              </td>
                              <td>
                                <IoLocationSharp className="red absolute right-comment-mfo pointer" />
                                <span className="black">
                                  {stringToArray(
                                    ind_item.ind_performance[0]
                                      .performance_standard
                                  )}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="no-border"></td>
                              <td className="no-border"></td>
                              <td className="letter">
                                <span>
                                  {
                                    ind_item.ind_performance[1]
                                      .performance_metric
                                  }
                                </span>
                              </td>
                              <td>
                                <IoLocationSharp className="red absolute right-comment-mfo-1 pointer" />
                                <span className="black">
                                  {
                                    ind_item.ind_performance[1]
                                      .performance_measure
                                  }
                                </span>
                              </td>
                              <td>
                                <IoLocationSharp className="red absolute right-comment-mfo pointer" />
                                <span className="black">
                                  {
                                    ind_item.ind_performance[1]
                                      .performance_target
                                  }
                                </span>
                              </td>
                              <td>
                                <IoLocationSharp className="red absolute right-comment-mfo pointer" />
                                <span className="black">
                                  {stringToArray(
                                    ind_item.ind_performance[1]
                                      .performance_standard
                                  )}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="no-border"></td>
                              <td className="no-border"></td>
                              <td className="letter">
                                <span>
                                  {
                                    ind_item.ind_performance[2]
                                      .performance_metric
                                  }
                                </span>
                              </td>
                              <td>
                                <IoLocationSharp className="red absolute right-comment-mfo-1 pointer" />
                                <span className="black">
                                  {
                                    ind_item.ind_performance[2]
                                      .performance_measure
                                  }
                                </span>
                              </td>
                              <td>
                                <IoLocationSharp className="red absolute right-comment-mfo pointer" />
                                <span className="black">
                                  {
                                    ind_item.ind_performance[2]
                                      .performance_target
                                  }
                                </span>
                              </td>
                              <td>
                                <IoLocationSharp className="red absolute right-comment-mfo pointer" />
                                <span className="black">
                                  {stringToArray(
                                    ind_item.ind_performance[2]
                                      .performance_standard
                                  )}
                                </span>
                              </td>
                            </tr>
                            {mfo_item.mfo_ind_info.length === ind_index + 1 && (
                              <tr>
                                <td className="no-border"></td>
                                <td className="no-border"></td>
                                <td colSpan={5}>
                                  <IconComponent
                                    icon={<AiOutlinePlus />}
                                    onClick={() => {}}
                                  />
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        ))}
                      {item.mfo_info.length === mfo_index + 1 && (
                        <tr>
                          <td className="no-border"></td>
                          <td colSpan={6}>
                            <IconComponent
                              icon={<AiOutlinePlus />}
                              onClick={() => {}}
                            />
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
              </React.Fragment>
            ))}
            <tr>
              <td colSpan={7}>
                <IconComponent icon={<AiOutlinePlus />} onClick={() => {}} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
