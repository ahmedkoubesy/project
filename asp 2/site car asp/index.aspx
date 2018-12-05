<%@ Page Language="C#" AutoEventWireup="true" CodeFile="index.aspx.cs" Inherits="index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Car</title>
		
	<link href="css/bootstrap.min.css" rel="stylesheet"/>
	<link href="css/font-awesome.min.css" rel="stylesheet"/>
	<link href="css/style.css" rel="stylesheet"/>
</head>
<body>
    <form id="form1" runat="server">
        <nav>
			<div class="container">
				<div class="row text-right">
					<div class="call-us">
						<a href="#" class="h4">CALL US TODAY 1-800-000-0000 </a>
						<i class="fa fa-facebook"></i>
						<i class="fa fa-twitter"></i>
						<i class="fa fa-google-plus"></i>
					</div>
				</div>
				<div class="row">
					<div class="menu_bar">
						<h1><a href="#"><span>Pre</span>Owned Cars</a></h1>
						<ul class="list-unstyled text-right">
							<li><a href="#">HOME</a></li>
							<li><a href="html/Inventory.html">INVENTORY</a></li>
							<li><a href="html/financing.html">FINANCING</a></li>
							<li><a href="html/about.html">ABOUT US</a></li>
							<li><a href="html/contact.html">CONTACT</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
				<!-------------------------------- section slider ---------------------------------->
		<header>
			<div class="container">
				<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
				  <!-- Wrapper for slides -->
				  <div class="carousel-inner" role="listbox">
					<h1>0.9% APR FINANCING AVAILABLE FOR UP TO 24 MONTHS</h1>
					<a href="html/Inventory.html" class="text-center">SEE DETAILS</a>
					<div class="item active">
					  <img src="img/1.png" alt="s"/>
					  <!--<div class="carousel-caption">
						...
					  </div>-->
					</div>
					<div class="item">
					  <img src="img/2.png" alt="5"/>
					  <!--<div class="carousel-caption">
						...
					  </div>-->
					</div>
					<div class="item">
					  <img src="img/3.png" alt="5"/>
					  <!--<div class="carousel-caption">
						...
					  </div>-->
					</div>
				  </div>
				</div>
			</div>
		</header>		
		<!-------------------------------- section courses ---------------------------------->
		<section class="cars">
			<div class="container" >
				<h1>Hot On The Lot</h1>
				<hr/>
                <div class="filter">   <!------------filter------------->
                <span>Filtration By</span>
<%--                <asp:Button ID="Button1" runat="server" class="btn btn-primary" Text=" The Manufacture" OnClick="Button1_Click" />
                <asp:Button ID="Button2" runat="server" class="btn btn-primary" Text="The Transmission" OnClick="Button1_Click" />
                <asp:Button ID="Button3" runat="server" class="btn btn-primary" Text="Max Price" OnClick="Button1_Click" />
                <asp:Button ID="Button4" runat="server" class="btn btn-primary" Text="Min Price" OnClick="Button1_Click" />
                <asp:Button ID="Button5" runat="server" class="btn btn-primary" Text="Max Mileage" OnClick="Button1_Click" />
                <asp:Button ID="Button6" runat="server" class="btn btn-primary" Text="Min Mileage" OnClick="Button1_Click" />--%>
                    <asp:DropDownList ID="DropDownList1" runat="server" class="form-control" DataSourceID="SqlDataSource2" DataTextField="made" DataValueField="made" Enabled="True" Visible="True" AutoPostBack="False">
                        <asp:ListItem>BMW</asp:ListItem>
                        <asp:ListItem>Marcides</asp:ListItem>
                        <asp:ListItem>Toyota</asp:ListItem>
                        <asp:ListItem>Jealy</asp:ListItem>
                    </asp:DropDownList>
                    <asp:DropDownList ID="DropDownList2" runat="server" class="form-control">
                        <asp:ListItem>Automatic</asp:ListItem>
                        <asp:ListItem>Manual</asp:ListItem>
                    </asp:DropDownList>
                    <asp:DropDownList ID="DropDownList3" runat="server" class="form-control" Enabled="True" Visible="True">
                        <asp:ListItem>Saloon</asp:ListItem>
                        <asp:ListItem>Hatchback</asp:ListItem>
                        <asp:ListItem>SUV</asp:ListItem>
                        <asp:ListItem>4x4</asp:ListItem>
                    </asp:DropDownList>
                    <input type="text" class="form-control" runat="server"  placeholder="Enter Max Price" id="maxp" />
                    <input type="text" class="form-control" runat="server" placeholder="Enter Min Price" id="minp"/>
                    <input type="text" class="form-control" runat="server" placeholder="Enter Max Mileage" id="maxm" />
                    <input type="text" class="form-control" runat="server" placeholder="Enter Min Mileage" id="minm" />
                    <asp:Button ID="Button1" runat="server" Text="Search"  class="btn btn-primary" OnClick="Button1_Click"/>
                </div>
                                                    <!------------cars item------------->
                <asp:DataList ID="DataList1" runat="server" DataKeyField="id" DataSourceID="SqlDataSource1" RepeatColumns="4" RepeatDirection="Horizontal">
                    <ItemTemplate>
                        <div class="car">
							<img src='<%# Eval("img") %>'/>
						</div>
						<div>
							<h4><%# Eval("made") %></h4>
							<h5>Transmission: <%# Eval("Transmission") %></h5>
                            <h5>Type: <%# Eval("typecar") %></h5>
							<h5>Mileage: <%# Eval("Mileage") %></h5>
							<h5>Price:<span> $ <%# Eval("Price") %></span> </h5>
							<h4 class="detalis text-center">See Detalis</h4>
						</div>
                    </ItemTemplate>
                </asp:DataList>
			    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:DB_carConnectionString %>" SelectCommand="SELECT * from car where made=coalesce(@x , car.made) and Transmission=coalesce(@auto , Transmission) and typecar=coalesce(@type , typecar) and Price <= coalesce(@maxp,Price) and Price >= coalesce(@minp,Price) and Mileage <= coalesce(@maxm,Price) and Mileage  >= coalesce(@minm,Price)"> 
                    <SelectParameters>
                        <asp:ControlParameter Name="x"    Type="string" ControlID="DropDownList1" PropertyName="SelectedItem.Value" DefaultValue="null" />
                        <asp:ControlParameter Name="auto" Type="string" ControlID="DropDownList2" PropertyName="SelectedItem.Value" DefaultValue="null" />
                        <asp:ControlParameter Name="type" Type="string" ControlID="DropDownList3" PropertyName="SelectedItem.Value" DefaultValue="null" />
                        <asp:ControlParameter Name="maxp" Type="int32" ControlID="maxp" PropertyName="Value" DefaultValue="100000"/>
                        <asp:ControlParameter Name="minp" Type="int32" ControlID="minp" PropertyName="Value" DefaultValue="0"/>
                        <asp:ControlParameter Name="maxm" Type="int32" ControlID="maxm" PropertyName="Value" DefaultValue="100000"/>
                        <asp:ControlParameter Name="minm" Type="int32" ControlID="minm" PropertyName="Value" DefaultValue="0"/>
                    </SelectParameters>
                </asp:SqlDataSource>
			    <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:DB_carConnectionString %>" SelectCommand="SELECT * FROM [car]">
                </asp:SqlDataSource>
			</div>
		</section>

		<!-------------------------------- footer --------------------------->
		<footer class="text-center">
			<h5>© 2023 by Car Dealership. Proudly created with Wix.com</h5>
			<h5>Copyright © All Rights Reserve disgnerto Ahmed Koubesy</h5>
		</footer>
    </form>

    <script src="js/jquery-3.2.1.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/querys.js"></script>
</body>
</html>
