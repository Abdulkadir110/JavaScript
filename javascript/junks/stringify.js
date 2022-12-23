let myLeads = `["www.amazon.com"]`


myLeads = JSON.parse(myLeads)
myLeads.push("www.iki.com")
myLeads = JSON.stringify(myLeads)

console.log(typeof myLeads)
