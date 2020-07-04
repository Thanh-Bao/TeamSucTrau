/* ################################################################################################################################                                                                                                                                #
#   _____ _               _   _                                      _                           ___   ___ ___   ___              #
#  / ____(_)             | | (_)                                    (_)                         |__ \ / _ \__ \ / _ \             #
# | |  __ _  __ _  ___   | |_ _  ___ _ __    _ __   __ _ _   _  ___  _   _ __ ___   __ _ _   _     ) | | | | ) | | | |            #
# | | |_ | |/ _` |/ _ \  | __| |/ _ \ '_ \  | '_ \ / _` | | | |/ _ \| | | '_ ` _ \ / _` | | | |   / /| | | |/ /| | | |            #
# | |__| | | (_| | (_) | | |_| |  __/ |_) | | | | | (_| | |_| | (_) | | | | | | | | (_| | |_| |  / /_| |_| / /_| |_| |            #
#  \_____|_|\__,_|\___/   \__|_|\___| .__/  |_| |_|\__, |\__,_|\___/|_| |_| |_| |_|\__,_|\__, | |____|\___/____|\___/             #
#                                  | |             __/ |                                 __/ |                                    #
#                                  |_|            |___/                                 |___/                                     #                                                                                                                                 #
################################################################################################################################## */



import React, { Component } from "react";
import $ from "jquery";
import data from "../SIMULATION_DATABASE/data_BlockNews.json";

class Search extends Component {
  getUserLocation = () => {
    $.getJSON("https://ipinfo.io?token=e4c3670fe0f797", function (data) {
      $("#ip").html(data.ip);
      $("#hostname").html(data.hostname);
      $("#country").html(data.country);
      $("#region").html(data.region);
      $("#city").html(data.city);
      $("#timezone").html(data.timezone);
      $("#loc").html(data.loc);
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 mb-12">
            <div className=" text-justify text-center SearchPage ">
              <div id="align-top"></div>
              {this.getUserLocation()}
              <h2 className="title">
                <i className="fa fa-street-view"></i> Tìm kiếm những dự án bất
                động sản hiện có xung quanh bạn
              </h2>
              <table className="table table-bordered getUserLocationTable">
                <thead className=" table-success">
                  <tr>
                    <th scope="col" colSpan="2">
                      Thông tin của bạn
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th scope="row">Public IP</th>
                    <td id="ip"></td>
                  </tr>
                  <tr>
                    <th scope="row">Nhà mạng</th>
                    <td id="hostname"></td>
                  </tr>

                  <tr>
                    <th scope="row">Quốc gia</th>
                    <td id="country"></td>
                  </tr>

                  <tr>
                    <th scope="row">Khu vực</th>
                    <td id="region"></td>
                  </tr>

                  <tr>
                    <th scope="row"> Thành phố</th>
                    <td id="city"></td>
                  </tr>

                  <tr>
                    <th scope="row"> Timezone</th>
                    <td id="timezone"></td>
                  </tr>

                  <tr>
                    <th scope="row"> Tọa Độ</th>
                    <td id="loc"></td>
                  </tr>

                  <tr>
                    <th scope="row" colSpan="2">
                      {/* bengin button */}
                      <div>
                        {/* Button trigger modal */}
                        <button
                          type="button"
                          className="btn btn-success"
                          data-toggle="modal"
                          data-target="#SearchLocation"
                        >
                          <i className="fa fa-search-plus"></i> Search
                        </button>
                        {/* Modal */}
                        <div
                          className="modal fade"
                          id="SearchLocation"
                          tabIndex={-1}
                          role="dialog"
                          aria-labelledby="exampleModalCenterTitle"
                          aria-hidden="true"
                        >
                          <div
                            className="modal-dialog modal-dialog-centered"
                            role="document"
                          >
                            <div className="modal-content">
                              <div className="modal-header ">
                                <h5 className="modal-title">
                                  <span className="loader loader1"></span>
                                  <span className="title">Đang tìm</span>
                                </h5>
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">
                                    <i className="fa fa-times-circle closeBtn"></i>
                                  </span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <h4 className="notification">
                                  Đã tìm thấy 1 bản tin phù hợp với bạn
                                </h4>
                                <div className="searchResultBox">

                                <br />
                                <p>{data[4].title}</p>
                                <br />
                                <img className="searchTocpicResultIMG" src={data[5].imgsrc}></img>
                                <br />
                                <p className=" text-justify mx-3 searchTocpicResult">{data[4].description}</p>
                              </div>
                                </div>
                              <div className="modal-footer">
                                <a
                                  href={data[4].linkTopic}
                                  className="btn btn-primary btnSearchBox "
                                  >
                                  <i className="fa fa-newspaper-o"></i> Mở
                                </a>

                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  data-dismiss="modal"
                                  >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* end button */}
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
