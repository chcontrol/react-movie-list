
class ComponentToPrint extends React.Component {
    render() {
      const mystyle = {
        marginleft: -5,
        padding: "10px",
      };
      return (
        <div>
          <table>
            <tbody>
              <tr>
                <td colSpan="3">
                  <h1 style={{ mystyle }}>
                    <Barcode value={this.props.TagPrintId} />
                  </h1>
                </td>
              </tr>
              <tr>
                <td width="10%">STS PO</td>
                <td width="1%">:</td>
                <td width="20%"></td>
                <td width="50%" align="left"></td>
              </tr>
              <tr>
                <td>TYPE</td>
                <td>:</td>
                <td colSpan="2"></td>
              </tr>
              <tr>
                <td>SPEC</td>
                <td>:</td>
                <td colSpan="2"></td>
              </tr>
              <tr>
                <td>NPS</td>
                <td>:</td>
                <td>
                  <span></span>
                </td>
              </tr>
              <tr>
                <td>PCS</td>
                <td>:</td>
                <td colSpan="2"> &nbsp; PCS. / BUNDLE</td>
              </tr>
  
              <tr>
                <td>WEIGHT</td>
                <td>:</td>
                <td colSpan="2"> &nbsp; KGS. / BUNDLE</td>
              </tr>
  
              <tr>
                <td>BUNDLE</td>
                <td>:</td>
                <td colSpan="2"></td>
              </tr>
              <tr>
                <td>H/N</td>
                <td>:</td>
                <td colSpan="2"></td>
              </tr>
              <tr>
                <td>CUST</td>
                <td>:</td>
                <td colSpan="2"></td>
              </tr>
              <tr>
                <td>CUST PO</td>
                <td>:</td>
                <td colSpan="2"></td>
              </tr>
              <tr>
                <td>PORT</td>
                <td>:</td>
                <td colSpan="2"></td>
              </tr>
              <tr>
                <td colSpan="3">&nbsp;&nbsp;MADE IN THAILAND</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }