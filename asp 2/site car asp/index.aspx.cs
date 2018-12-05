using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;

public partial class index : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if(!IsPostBack)
        {
            SqlDataSource1.SelectCommand = "select * from car";
        }

    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        //string x ="made desc" ;
        //Button btnpressed = sender as Button;

        //switch(btnpressed.Text)
        //{
        //    case "The Manufacture":
        //        x = "made desc";
        //        break;
        //    case "The Transmission":
        //        x = "Transmission";
        //        break;
        //    case "Max Price":
        //        x = "Price desc";
        //        break;
        //    case "Min Price":
        //        x = "Price";
        //        break;
        //    case "Max Mileage":
        //        x = "Mileage desc";
        //        break;
        //    case "Min Mileage":
        //        x = "Mileage";
        //        break;
        //}

        //SqlDataSource1.SelectCommand = "select * from car order by " + x;
        //if (maxp.Value == "")
        //{
        //    maxp.Value = "100000";
        //}
        //if (minp.Value == "")
        //{
        //    minp.Value = "0";
        //}
        //if (maxm.Value == "")
        //{
        //    maxm.Value = "100000";
        //}
        //if (minm.Value == "")
        //{
        //    minm.Value = "0";
        //}

        //SqlDataSource1.SelectCommand = "selectPcar";
        //SqlDataSource1.SelectCommandType = SqlDataSourceCommandType.StoredProcedure;
        //SqlDataSource1.UpdateParameters.Add("@x", DropDownList1.SelectedItem.Value);
        //SqlDataSource1.UpdateParameters.Add("@auto", DropDownList2.SelectedItem.Value);
        //SqlDataSource1.UpdateParameters.Add("@type", DropDownList3.SelectedItem.Value);
        //SqlDataSource1.UpdateParameters.Add("@maxp", maxp.Value);
        //SqlDataSource1.UpdateParameters.Add("@minp", minp.Value);
        //SqlDataSource1.UpdateParameters.Add("@maxm", maxm.Value);
        //SqlDataSource1.UpdateParameters.Add("@minm", minm.Value);

        //SqlDataSource1.DataBind();
         
        
        
    }
}






