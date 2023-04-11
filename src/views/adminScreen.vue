<template>
    <div class="mt-5" style="height:94vh">

        <div class="container span4">
            <ul class="nav nav-tabs">
                <li class="nav-item bg">
                    <a class="nav-link" aria-current="page" href="#">Document</a>
                </li>
                <li class="nav-item bg">
                    <a class="nav-link" href="#">Post</a>
                </li>
                <!-- <li class="nav-item bg">
                    <a class="nav-link" href="#">Link</a>
                </li> -->
            </ul>
            <div class="tabbable bigdiv shadow">
                <div class="tab-content">
                    <div class="tab-pane active" id="A">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col" style="background-color:#ececec">#</th>
                                    <th scope="col" style="background-color:#ececec">Name</th>
                                    <th scope="col" style="background-color:#ececec">Degree</th>
                                    <th scope="col" style="background-color:#ececec">Document</th>
                                    <th scope="col" style="background-color:#ececec">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" style="width: 20vh">1</th>
                                    <td style="width: 20vh">ณัชชา ธีระแนว</td>
                                    <td style="width: 20vh">ปริญญาตรี ปี 3</td>
                                    <td style="width: 20vh">doc.pdf</td>
                                    <td style="width: 20vh">
                                        <button type="button" class="btn btn-success" style="margin-right:1vh">Approve</button>
                                        <button type="button" class="btn btn-danger">Reject</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>
                                        <button type="button" class="btn btn-success" style="margin-right:1vh">Approve</button>
                                        <button type="button" class="btn btn-danger">Reject</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>
                                        <button type="button" class="btn btn-success" style="margin-right:1vh">Approve</button>
                                        <button type="button" class="btn btn-danger">Reject</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-pane" id="B">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>pppppk</td>
                                    <td>hjmgvhbm</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div> <!-- /tabbable -->
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');
*{
    font-family: 'Sarabun', sans-serif;


}
.bg{
    background-color: #ececec;
    margin-right: 2vh;
    border-top-left-radius: 1vh;
    border-top-right-radius: 1vh;
    color: black
}
.bigdiv{
    height:89vh;
    /* border-top-left-radius: 2vh;
    border-top-right-radius: 2vh; */

}
</style>
  