<div>
                <div class="center">

                    <div>
                        <div class="text-center h1"><u>Our Tours</u></div>
                        <div>{this.state.datas.map(data => <div key={data.id}>

                            <div>

                                <img class="singleimg" src={data.image} />

                                <div>
                                    <div class="size" >
                                        <div class="row">
                                            <div class="col">
                                                <h5 class=" text text-end">{data.name}</h5></div>

                                            <div class="col">
                                                <h5 class="text text-end">${data.price}</h5></div>

                                            <div class = " info"><p>{data.info}</p></div>
                                            <div class="text text-center"><button type="button" class="btn btn-outline-secondary btn-lg" onClick={this.handleSubmit}>Not Interested</button></div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        </div>)}
                    </div>
                </div>
            </div>
            </div >
