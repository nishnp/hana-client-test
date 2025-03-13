const hana = require('@sap/hana-client'); // Assuming you're using SAP HANA client
const conn = hana.createConnection();
const traceCB = function (buf) {
  console.log(buf);
};
conn.onTrace("API=TRACE,SQL=TRACE,FLUSH,OutBufferSize=64k", traceCB);
const conn_params = {
  host: "bb529494-6259-4496-a72e-160160db95e6.hna0.prod-eu20.hanacloud.ondemand.com", // replace by hana.credentials.host
  port: "443",
  currentSchema: "DCE6C899AF5640709AE037ACA59DFAED", // replace by hana.credentials.schema
  uid: "DCE6C899AF5640709AE037ACA59DFAED_5M3DPSGZRG5GUA54N6M7QZMRE_RT", // <-- replace by hana.credentials.user
  pwd: "", // <-- replace by hana.credentials.password
};

const query = `WITH ITFM4_AllocateServiceBU AS
(
	SELECT 
		*,
		( '$[' || lpad( "$$RN$$", 6, '0' ) ) AS _path_
	FROM 
		(
			(SELECT 
				*,
				ROW_NUMBER() OVER( ORDER BY _ID ASC ) AS "$$RN$$"
			FROM 
				(
					(SELECT 
						ITFM4_AllocateServiceBU._createdAt,
						ITFM4_AllocateServiceBU._createdBy,
						ITFM4_AllocateServiceBU._modifiedAt,
						ITFM4_AllocateServiceBU._modifiedBy,
						ITFM4_AllocateServiceBU._log_ID,
						ITFM4_AllocateServiceBU._rule_ID,
						ITFM4_AllocateServiceBU._state,
						ITFM4_AllocateServiceBU._ID,
						ITFM4_AllocateServiceBU.ID,
						ITFM4_AllocateServiceBU.PostingDate,
						ITFM4_AllocateServiceBU.LocalCurrency_Code,
						ITFM4_AllocateServiceBU.TaxonomyVersion_Code,
						ITFM4_AllocateServiceBU.CostPool_Code,
						ITFM4_AllocateServiceBU.OffsetAmountLocalCurrency,
						ITFM4_AllocateServiceBU.WBSDriverValue,
						ITFM4_AllocateServiceBU.EndDate,
						ITFM4_AllocateServiceBU.PoolFlowType_Code,
						ITFM4_AllocateServiceBU.CompanyCode_Code,
						ITFM4_AllocateServiceBU.WBSElement_Code,
						ITFM4_AllocateServiceBU.ProjectScenario_Code,
						ITFM4_AllocateServiceBU.TowerDriverValue,
						ITFM4_AllocateServiceBU.AccountNumber_Code,
						ITFM4_AllocateServiceBU.SKUID,
						ITFM4_AllocateServiceBU.UnitCostMeasure_Code,
						ITFM4_AllocateServiceBU.CostSubPool_Code,
						ITFM4_AllocateServiceBU.BillAccountID,
						ITFM4_AllocateServiceBU.Scenario_Code,
						ITFM4_AllocateServiceBU.StartDate,
						ITFM4_AllocateServiceBU.AdjustmentPercentage,
						ITFM4_AllocateServiceBU.Tower_Code,
						ITFM4_AllocateServiceBU.CostRelation_Code,
						ITFM4_AllocateServiceBU.CloudServiceName,
						ITFM4_AllocateServiceBU.SubTower_Code,
						ITFM4_AllocateServiceBU.Service_Code,
						ITFM4_AllocateServiceBU.AmountInLocalCurrency,
						ITFM4_AllocateServiceBU.Project_Code,
						ITFM4_AllocateServiceBU.ScenarioType,
						ITFM4_AllocateServiceBU.AmountInGroupCurrency,
						ITFM4_AllocateServiceBU.UnitCostMeasureValue,
						ITFM4_AllocateServiceBU.RowCount,
						ITFM4_AllocateServiceBU.UnitCostTower,
						ITFM4_AllocateServiceBU.ServiceDriverValue,
						ITFM4_AllocateServiceBU.WBSPackage_Code,
						ITFM4_AllocateServiceBU.AllocationDriver_Code,
						ITFM4_AllocateServiceBU.BusinessUnit_Code,
						ITFM4_AllocateServiceBU.BusinessUnitDriverValue
					FROM z_Ext_ITFM4_AllocateServiceBU AS ITFM4_AllocateServiceBU
					ORDER BY ITFM4_AllocateServiceBU._ID ASC
					LIMIT 2)
				) AS ITFM4_AllocateServiceBU)
		) AS ITFM4_AllocateServiceBU
)
SELECT 
	_path_ AS "_path_",
	'{}' AS "_blobs_",
	'{}' AS "_expands_",
	(
		(SELECT 
			to_char( _createdAt, 'YYYY-MM-DD"T"HH24:MI:SS.FF3"Z"' ) AS "_createdAt",
			_createdBy AS "_createdBy",
			to_char( _modifiedAt, 'YYYY-MM-DD"T"HH24:MI:SS.FF3"Z"' ) AS "_modifiedAt",
			_modifiedBy AS "_modifiedBy",
			_log_ID AS "_log_ID",
			_rule_ID AS "_rule_ID",
			_state AS "_state",
			_ID AS "_ID",
			ID AS "ID",
			to_char( PostingDate, 'YYYY-MM-DD' ) AS "PostingDate",
			LocalCurrency_Code AS "LocalCurrency_Code",
			TaxonomyVersion_Code AS "TaxonomyVersion_Code",
			CostPool_Code AS "CostPool_Code",
			TO_NVARCHAR(OffsetAmountLocalCurrency) AS "OffsetAmountLocalCurrency",
			TO_NVARCHAR(WBSDriverValue) AS "WBSDriverValue",
			to_char( EndDate, 'YYYY-MM-DD' ) AS "EndDate",
			PoolFlowType_Code AS "PoolFlowType_Code",
			CompanyCode_Code AS "CompanyCode_Code",
			WBSElement_Code AS "WBSElement_Code",
			ProjectScenario_Code AS "ProjectScenario_Code",
			TO_NVARCHAR(TowerDriverValue) AS "TowerDriverValue",
			AccountNumber_Code AS "AccountNumber_Code",
			SKUID AS "SKUID",
			UnitCostMeasure_Code AS "UnitCostMeasure_Code",
			CostSubPool_Code AS "CostSubPool_Code",
			BillAccountID AS "BillAccountID",
			Scenario_Code AS "Scenario_Code",
			to_char( StartDate, 'YYYY-MM-DD' ) AS "StartDate",
			TO_NVARCHAR(AdjustmentPercentage) AS "AdjustmentPercentage",
			Tower_Code AS "Tower_Code",
			CostRelation_Code AS "CostRelation_Code",
			CloudServiceName AS "CloudServiceName",
			SubTower_Code AS "SubTower_Code",
			Service_Code AS "Service_Code",
			TO_NVARCHAR( AmountInLocalCurrency, '0.000' ) AS "AmountInLocalCurrency",
			Project_Code AS "Project_Code",
			ScenarioType AS "ScenarioType",
			TO_NVARCHAR( AmountInGroupCurrency, '0.000' ) AS "AmountInGroupCurrency",
			TO_NVARCHAR(UnitCostMeasureValue) AS "UnitCostMeasureValue",
			RowCount AS "RowCount",
			TO_NVARCHAR(UnitCostTower) AS "UnitCostTower",
			TO_NVARCHAR(ServiceDriverValue) AS "ServiceDriverValue",
			WBSPackage_Code AS "WBSPackage_Code",
			AllocationDriver_Code AS "AllocationDriver_Code",
			BusinessUnit_Code AS "BusinessUnit_Code",
			TO_NVARCHAR(BusinessUnitDriverValue) AS "BusinessUnitDriverValue"
		FROM JSON_TABLE( '{}', '$' COLUMNS( "'$$FaKeDuMmYCoLuMn$$'" FOR ORDINALITY ) )
		FOR JSON ( 'format'='no', 'omitnull'='no', 'arraywrap'='no' ) RETURNS NVARCHAR(2147483647))
	) AS "_json_"
FROM ITFM4_AllocateServiceBU;`;

conn.connect(conn_params, function (err) {
  if (err) throw err;
  
  conn.exec(query, function (err, result) {
    if (err) throw err;
    
    console.log(JSON.stringify(result, null, 2));
    conn.disconnect();
  });
});
