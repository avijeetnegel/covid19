sap.ui.define(["sap/ui/model/json/JSONModel"
	],function(JSONModel){
			"use strict";
			var flag = "";
		return {
		firstCase: function(inp){
		return	'First Case on ' + inp; 	
		},
		countryFlag:function(inp1){
			var oData = this.getOwnerComponent().getModel("countryFlag");       
			// var oModel = new JSONModel();
			// oModel.loadData("model/countryCode.json");
			// oModel.attachEventOnce("requestCompleted",function(oEvent) {
				var value = [];
				value = oData.getData().data;
				
			// 	value = oEvent.getSource().getData();
						$.each(value, function (index) {
							if (value[index].name === inp1){
								var code = value[index].code;
								 flag = "https://www.countryflags.io/" + code + "/flat/64.png";
									
							}else if(inp1 ==='Diamond Princess'){
							flag = "data:image/jpeg;base64,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"
							}else if(inp1 === 'World'){
							flag = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAACdCAMAAADymVHdAAAAulBMVEX///8AfJEAeI7f4N4AeY8Ac4oAdYsAb4cAcYj8/Pzh4uDj5OIAfZLc3dsAbYX5+flIlaVEj6Dw8fDp6ehxqbZ2r7s4jJ7n8PLy9/h/s74AaILt9PWFt8JZnKvz8/Jjo7HP4ua00Nfb6ewnh5qny9Oex8/W5enD2t+Vvce91dtRmqmsz9YAY358tsGkzNSYw8w1lKWOv8i5zdLR3d+lw8pXmKiz191On66bu8HC4OVqq7dto7HI2NpvsL0f+GSyAAAgAElEQVR4nO1dCZuiuNaGmATRKChhK8EAUUGcaduv7Z471XP//9/6koD7hlpLz3P79Ex3lVZhOJzlPUtONO03/abf9Juak59puTa1uaeTMsz9z17Or0fW0Bl2O06r1es4w+HQOnzXX0RFbBAPQAgY455HBvOZ+Tkr/fXIHA7Nbq/VanVaG+p1uoqF/ijQkrWQtwABolcEAbd/UjecWLcu/L9AQvC6Xcm4bmufuo7lz2ccGfGU5WXfS5O2viU8XRZFqhWRvMDI/18WxLFpOp2N5HU6W+454r2iT5Y2JBAgqEOM9T0CgjAwkoSmy37/j9V7iuKv/HgE83qW6XQdJX3DYc3AntDedOlxwSioXyYw/4kwQjB6T4cy7Pa6v66l6ArG9RxrbA3HpuNsdLg71uakj6/xrtZkgEvCrn+EOdQs63EODOWCfk0ZtLriv0rkusNer+tU3Ou0uuLNwJ/im/wTMuheub5lCfMw7nZ6nV6v5zy8TGGhHedXk0FrXP/rOIpvnWG3soNdp34nQA34p+v99OJnOD1x552OJT6jtbnqI0t1er2WsDOPX+GNST1LifcszRKqocBLdyg8sXQl4pbl2wkt+W0FFgSLK9rl9CqRflZ6rLHTtbriIT95nTchgVkki4RUdHvWsCe01ZFSt8F/vZalJdxAoIn+Cv7FVz/MGY67ra7ZGj5vw8Qqu29wmefXIfysVQOD4VAToYclvxmOhxUKHMs35wXgrJEAovlV/2tKsba0Ye9pE2bKC3w2/4SWCm6pCM3cmHRTaPFYMFK6EKG+9X362WTeTAL7NA+ufWSvN5Yq+Ab2yyywe+2j3p2sTq/bUV9JKROW0BxbpiWiXgExhOaqP1KjJfmF10eCbgEZyOZBMrr6qd3mK3Ra14xcaujEy/z86gN7RxLRxngsUIuwI10BXzSBDISNF1wcC/ysmVIStZ2g+HSSJn5eeDdcMQ7zN1ndUJrkzgUbF/hakEeefGBcwHb9/EcKsXhfqGOaw7HgYq8lzF2rZ8o1tzoSzohvh2Pp6LpnBCDp3zCC/ez5pTlC9p3xWe5Z+ZoSwjHwtsqAw3MyOBaXaDkCM72noTSHzlg+aadi1dgZar3eUNgpReIuznBwelUGSTR6WqPGMhY6/9YoNhAGQvL2HxmYnr1Kr9NxxA1Jt/8OkmiNh0I/TAVfDi8vnpgwhkPhhsWfc796JSCBkIfl0xLYvQwU2cnTA3h+6Trv6qNNBfF2D1rFpoJllsCnjmMqPynt4JlFXIxIAKYlWT+bRjC7FyNd058fPTygU9P3dzL/cbhmXMFkKePyc4fCjwgHKZzuULBVopjOuCt8sPjvdE2r8yIIlsvFJM+evYdh56zGzaAOXhb86CNdPys8g08gJIn4odFLXEQf45QlSO7JqLfb6Y47Vq9nCWMhXnQsYb01S7gRGRE74/E5R3Iho4XDJATP8m8snNruu4CxpWYpoSZC8I+fHA+FSYSwLKEO257NBhBisjMhwXr+NpjglCzJv+G419oIYsuRYFriPonThBiqVEy30zljzxfUO8tBaJDiWQOoIr3dt+s2YlqSZTmfaBNy+pGg+mBY/S3/BXSbDfd1hOxkFLtXgekVGl0zR07HEThmk+/rSByjYrncSOVtdFrOJhctfPShM5lnfgnOCKA3XRvxkwpkDbu93aclRMd++keQuxjxnJ750FNChaa5eRJmSSo5bOuALx6yy9OCkDKcXP0ZmVjb8LBSVXMAiCnf2Ahnnc8/YOFspvGThYOVcOv/+XrRJx5QErD5kk3O4rfuNskiFqPDUosNHpUQ+GEjBuoozBHGABHl7KRw4v4kjZjNmq2t+miXy/QJBBgiQIt5ku70wteyZPO1AM9bKWwpXeVtQ9qN8Vimo8W9bFKqB4qcL89gmThfR42WmGtJHBPCYrK88ZNC0IFrcgCF1YXLuFE6QzzKU5ggGCou0t/x4JaiHOAlIMIdBAqZ6PT9PEsZ5KOlb0v8PtzWjHoqxSlcRkLXymakpZJes05LHyVAJ6cMhKjvNTCBwYqLQAKjkHuLpXtJudaxjAlzLBgYYFt5ravFmEYEI7MIJ/PJSEv7nHM6v8DGLGJnbo8jUiQM5xgKvUAYQWDwIk/NTq/VGfqZNRToT0CXoRb141FpaiNkrCQDx86ehtdkadGROokLGl5xm32+nXISTiI3ZJgyhAUzD5lozsRfqTDFAHkTbYbgd3OUZk2F7wbh1JDSRPJUMkh8WZxlYc7bZ35ZxN4YgQMkAHE7VqvP8mihLpXMtRmHhHqa5gGueOVYViWCO3RmLvIj/hnJpFlPQub+tWIMUSZcZsmANFGgrW4j4uLvGWVLESsaodQgiDwG9X6SvNBls3TuLSK1I0eby2GSnl12YZw+Me/sJT03cgdxIGTBsEObhmUgkwUAjiZtjGR1bdgbV3Ww1g5TB25BDz6g3Rhu+TASwE3HUoIx5YTIBBluC9sZm1pWtkFVba6fj7DhbVebIG96Hji9ASF0bu2jpDzh13kGyno4RHSuPA4EgCRYISrC2ZJvLNoW7DgVC61o3yFiYFypxB3zLy6VPXMlAyPEk4ILLNwX3iT9mcTHcgbj+VJLJIJ+J/5BrMNBsDysg5kT4uXRCc64wEBFYPemWC2kFBqpuYWf3UqDndY2OVPsro5xUu6MWPY19eeLgl+SSFYqMAd4SIRfZR4kqTbKl5n2cxUidMolSCPXeIpFVwmy7AWhsP0S7i9ySQA4s5hrDDwiwrLIqjMi43HlRYT+trZQxg83JToSHbTBTKaeJ0AYPKsXMpnoSiGD38XXXHDHE75N8d0QinD+Fi+8/gYECG6XIswhhn2EBSZEIKy7JPDwwgC2/yhEeCyDevlPpcEC3u5YtUqqn4X2YeCfLSTYgIicjZ5mmCjdR0JlciKevw11FJgs9c9Eae9NXMYqlTSczSeWxyLYlIFgGXERgzu91lBiF5nQcqoS+x6vAlYJBn497hlkQvoHF+QPeK7EI0j421QqpnAoulDiQG9Wsn9jAoZ9ETgs5oOTn28sgdhTCNqxduk1yU2ntw+lqZIZyE/bEMz8PJoexZC40rJA4XIjBbSga0sf/KHsQztHhV8uBbpp/4w9bspAyPctgpkH2kgm+3vO4eNSJgJcbuNQv7ynyFMBTcCrkFuUaJX8iV8fNCs2vw1BEY7pIPuy+U6fZBeQ/2i/7iNsUhUDNWVge7Z/rYAA3l/Ir45qPCNh93W8vspAa6fKkRQz4Aq2EyHZmRI6YNO3wceNCLN5UvQnVvXskHctbA93bSzIlSGTwKewIRQFR71pA/FrRnQmzEjCCLcbp/8KSKT3jcU6xHezFxFGGewE970j4VJ8bpppqQgQIEbR1dX6hNdurV2Eff1HMKO2R7hg4W1vh2aH11JBL5JI+bQ+kv5oyj8tldcGzJN/iZAtiQthKNLTpNgbE8AysSVZRqt1DGw3n2n+7PpqhfGnhkBjOp5qX9PaFfhzzr9+vcnB9hEmUsBXobXAbsyuU5LVDMQliEFeFXVPcrGg92UfxOFyWkRpkMQ8UTzg7aYLTmfRsoTGYbaBfRWCeONDcZrs/0qu7ClkhRZEF9DxNQrm9bM2dQQTTegAqNrf5vgljd8NI9f8I0eCZoL2LdE7IB2mk0OLFv319aYphOTgVzb2PsIAlHd9vCRKklqizTRQ4oxqx72g4XFK7I0JwCMLnR4hjFsUc2sWH0YE5l8rfpODIFnvM8quKjbKFC7vrblx+LLYflOMRxD2E/FV0p55uGTvykBgH+X6poYsHDZduZm8nAM5/p+Cg7c+GuH23pPaY/i1/ufzxPDX7dcFFKbZVln8NWNhjL/YN7kA4aNAEfMj/mUqT5c0XHhSni3YCMYS1qRVEqIyqy5Q7EMNVN7HP//vNt7+ynLhf5lVDybnGMdTEC+vrUQm1yhVCnA/F+GJ+KQyK0abrTtwLxurJEgaJTgAMIQxzPhhnEV4eEejzkJf5BxtEGtQxex+ZOYrAWBWWAexfWkpEJA4pJTA0AOAN8zo74mrl6gP2zM5OdJhfD1yqim7XsrUzKhhAACEDB6/lheNi6w+lkWSCTYqOzwalXFJsoHciAPAkkpLgt0LrIHxknGpv9Bjf4ds1QTvQBhTb/tAXmYBz7S9Ss4IwT+aLfx2aTu1Gz1RLO78SN0Jx6gxHFz2S61AAjkL+GN9pViEQ9itJBqEhgww8dS70GcTb7vooEyZR6c/cXwL0F5xwFZbmIbaYDDeb4cl/NEOhRMyG22ZEXd+Wn3TsdGg9qY+JCOTkS91tL3WgnilZA2y+tIrRmNOypV70KkEiac2zwIyPcpDuwgc+BMYMn60NJlrFE9o71Uy3Gcgu9sFXqaCNNr0gcN854NlVISxMQnKe7o3Jhwh3c8mrnJGEBQhVjn9SAcepS7CzMVbYcK2K9wzHYQuiQ+rVjBe0VgBbwg4B4JPOmdSpjfNMSLqUrla4O4tf2329oxg8nb8s+bpxLtgvg+eM9j5P0Tni/mkmGlRYyglKA+lM095NJiqYouspkeykCVVTaXrQRmGdVLBi2TFDrMYEJcdL4sMvJhhgAchZRH7HnLxg65LXdm2oLs0RnFlbTjbFqBQYu3lMN+2dbDIg8F5Kpm0VYAcel8ARCwXuNI9Ybg8mwK/RPOkQBCwBRNS71HMjXIa0am+tWIQQG+qhCesch2qx+qcgoDvUREK/sjN3TJJJHUduK/UFb8YuXW/E6ChsPBKDNoz62qb/1OU+LlnnyXmhrYIIrN9I8TpbM2JCoVpG6PmAZGZR5O2Ul7EPA+jKGLT74S+Lgnk0VZL26tKrc+kgQ8ptKNNK9uWqyK8BlLuNsoi1JuraouIScfvtxds9DVB8DwBVOEgsl0kRIvC4+pVKyqKr+x6Nm2fgnkN9fDUXbo0NIyVQHfCh7jxqxcJaCZuGC0qMONFXARBNRdOuUfIwAYkPAt8PKHN2yoQCV1PGETsa2+xn+cSRRfTMpDlczrPkgmp98dhFq34KyZ57k8D6V5n96RlEnVfeAK9H6vQpdHEwCSS/Vb4dcoyjuO5mW+fU66NJORDXn6yPOCykMjmtXPGWzCW7gADQJTo7YlsPns3/mnRlV57hLA3k+2Zc7mjAE4GxG27uv33l7mb3P9JhXKe9iT0MC7CFXeXldfAkyjQRiTTgtrVYyXjXMekCIpjOQO89t8hPo6PhQrH0jPtXuERwDIP9WbA7wxdx9IoM8M/LGnxDDsKGUXcNf1omjzwQVakmkW88AVBT8tfXZa2o1D4FaCAbTizcqgcp/BTsquC4LVjmaGIVg7wwKLqCdHhgL66B0IIXDc8wIRg5etY7RoNG4Vuj9F1IIjyvE9nsz9+Jtq8LSKBMBAR4N3PM1DQQWqrzb3VKMEw1dZuP+L9qfsa0p0zdz05skJWS2Kk4//r9LpOwajyq9LVCsOM6QadSIiwRHCbp4Foig+1GrEXpBoeNGaUN+Lah2l0rgNubw2+b+A4ogFT6IrcvuAZSl+QQL3Cq5dU9sUKeTb6vsSGP6JINuftAfLs1XXt/kjmQZDxf7I/u9vtOrJxoaSRS18p20/cSA8u+CtRDPEGh21A4nEt/VlVLWS6Qe9o672Prqf2UTKRNzj7Lp87MthDe6UyV+iauEtElBgITDHl8kvLDSOP26GU6Nm8Shu7OnYjZbaC9XpcTbvorvuoWBociCAoPFJbQIgnnLrLyl1CR1pBga7pJhEdMO3d2Ked6RI/5KDAVR5XjQT40f2ksxflGEHVu2NaApRldt+ejbj7yhZ/h9loygwktCyfF4MlTd04kjvNhpJ7anBD91s+djJPgJRQP+N7ZdvzXsa1TSOE3dLm2wW83l2CuINOemcuEPAGj27VW3uV/o+0kTSGarKAFobpyEb2QsjhT4KUlcMYYTCIFsS25XapTS+imraS+8w7zRucW2d/ok1Zztu7XIf50jB/+hClN7at1gTL5NG9M+YqVgEXr0vKVWuD+VXolo4WWlYcRIs4WkwKmfca19OSOk63N+x0na5/IeV1yD/qq06Sqaq5VOT3mwP+ByhvVJTFRfDw1pm85NIC7kOJ8Xgmn8eSC7XO+1XYK9VQuJTIwEjq+ri7XlebVxy5CWMqnEmD7iM4yFW6YLGKt3Fm/Jjva0pBo5oYjB/ffTnKUkIr6J0FWeIXmwENmi8hoMB8MTM4FTCTvi7oQoaOkaoiYCMUCiyQzHrNbWuRvDYQQcgLLk1e0q8ruWHcPPX7GF2JRfbX9dT2S8l9c8JBG6M2e5nJDQwVKbEWOHE20hay2VeEjTJvjwFQGQXsjZ01kilIl6M+ow20BVeMS18U2/y0j9E9ibdHiLdvOxJhmp9g4IhEUY4rCAxdY0+Zs0mFMF7n8kFiCkVAsYesIGOxUlzkcuKyadGghbW68DQVD802vPbXcvruIzWz8iSuPCSoPwekmBCoetOPiGHPa1SwQjwUmACv9kyd+AZWv0Xxd0aw7t40OHALX3wW2Yt3Vt/tHVJP8vBC/Ro22bp1mXIZYuG4bpb1aNtLksojzZLdT/mUTVXbqBftl/AV2yGRdmal63x122Ibm4ddwsV7ZhEOaKLnLrW9V3a4OQzWzfFPDWswuaxKhrTuhABxGQpLKDNh675BtxmxjLuh68rEoO5uF6FaMWVxU0mhBwfuzWSrzjdh7+L6+Km3JaIlxsD2sOfiOh8kUa1XUgqMpnX8C5QZEPAV2YoO/qJcQTyROxXRa59EE8Ld6M9+JJBMKCIyFO4QH/gTQxTa8ntVbWOhvacl55m58RnBR07GS1ONy7wRiGNX5itBe5GkTGpuFjyJo2Z9EZfuCbawgurmkeQpoEAHwnpE7QWV8QoWnvY1qXvB1Aabn/RVdR9hpdkiRgtL6Y3kWj37XEmMxJ8yUjBNMnVfYODhEGOa7N4KXpJLv9WAZoANDlJ6cH/HOaxqaHhehpWMQl6yL8Iot+s90kJvoYrEq2QLiAZGGXkCMHuYUntxprlCNQ9/POVQ8/FmBexwDeBxIBVEZbw4tFvw9ZSBOjS3gB5CIxFWGbVVE6hRF5rcTbo6Dl2Psb/j8gcHqBif7v83PsxzHFIWaX6dHATuodWbY3PfX95DFI+tzD3oIgfhGQbihWqb2vBAuJZgJpwMQvErwlgHq23eUoR71KV/f2ExQLNu52QDLH5wpc9TkWmLDQf54VupFgQPodH1y5RzjtiE7EGTcG/P5YaBOjG1XasvVvsmczObryfFZDJH2NtvzoGgPaWMAttpdY/7RLGnvfOssYsULMzNzhd4Mn93no0eWZZHh0gFF/tCyF0bbzYPbhmICgFkdlXefDT6Pt2mLwqXHiVShURG3rzTyr+DvZ2IEMrORfppw/yTzUixA6NnzpdyO3fwAJh2yXgpb/BV5vk2Qggxi9yfYVUAEm+pGjSUDZjJXgzi2i7BbBM+5pQcqCpm6MePlRyPO9Mxt8PQk+Mo9NKWBam3dSJmdp/kKCk4YGC0EMt/aEakT4pxW6/cBgR164tgJQfAY4hJFgpzKymklAmt3WMS5LHcXbC5VPiSevtv5omWZirXRcMfjICotLFdI+i31uDRXalQVb2VFknSxPbMakEFpP7d+Rg/DGmlp9Kf4lJiDuyqYAeHAALBQsRqCYSgH2j2HgdxzPHOkowic7BTcEO+ZFY56/HKi+K+CN/eYF7hJZrc0UFAlRUElRsmhnyogRqgMZ0G06SRddlJgF0VGqGtpAd4kWzbqHIyVDkDutphmvao3s6j5mgQKgK6g8tuEzEgTqrPERzszqMYk2Uk8OY71n7vMqpzILNbKNVMf2oMtpgqELbwldqJlt8cVuNv5+j8rLlTNzdDPt3UzmowiPfa1/BS9t/K2Q16kX5bQYQPa0GbZhi8hQjDViftY1dX2doy2bz86SfCJLwtAlId90O22rxmymNDLMm6ZGTeZOGGtoCl9rVgyy9QMbBS7o1gOXLkREQH37qdzrxfHlmMGj6iHUa1et1vGC+p54b7P4u/P37vb0QzivkSwol3QS2yhvYmFAZPipRquJUVj9eNJ653CIMdAyEfytkCcoxXp9XqnU5OrYA22ussHnfNcSF7GVz9y+6Z+ugjszBXaLTqo8n3kp9rimjGwJmByzB6pew1Ftz7yVy6aRuFdUKhDHeeoXA61sYznJ1NLnmNjtTTioGKTeLdzpX5yx03+a5khlHoxf+cGyTZrFKdQI5Ud5Bs2A1JhABkthz/hWu+7WefQbR2w64mDxi4MN58gWW309GLawQGobuYyA3wNZWr9LOt4Jb8zDk/+7aRFcz+WrkexbKbbxVj6C1BSOJQdjTHqplXtp/V7EM6EazGJLMuH+/gG7Lb6fjFdPJnGxj23tQGlk2SJsv7GLLGu+bEbLblW7OMR8aEH3ILhJgth5yxhSunIon/29UMO2kb1a4HnvXVMAD8ZyVho7PXFz9NjlV7OJJTQZm7l3ILZvniXUvpd5E52cxDWNhz6z89OebXMptirvlLu42Zu1r2X5n7t92vPSmM1eQiMFiVpERCROmw2qsEw1WQpMx7OctAvw29YwbKeT9+tAp3RmWhLV5XzffQvz9FAp/NfC0w+NhqybH6nZ7TuGk7/TZDMOIDd4JRSMu6Ewe7yxhAoc4GTZ118a3bbc3qIRARkCO2+fmr2Tg7th3KxWW7FkNzKtuxkndE1fdTtny15gGHON2eLTdsHBq3nC9kioUT8YDL6hqb+MZjerzkAMYCDKsWtrCO4oCIim3jQhU1yTXv0D+YTCrInpVO5ItF8VQS/e0pEwuVQySdbn082hAubv+WJNOaox9cZrQAeI3/klsdBAYMBfx1eTV+rMYt821CGtHySjGX/zx6YXnq4xYJP5kE9NlHjmhrLLveSTqXN9wpDD4ZNUsumCFxETJe2yjKRmaBsEdtDigBshFSQDheTcbs1huS5Q6l/j+XLzc/xjGj5b5MzmXsNNLWv44T2dC6uj+jUAcs+S4WMLvhtr00KrJRkFaSYtNFH4pQmEBMQ2EbXRqpQ+ucZSi7oDGlZbtxGTX/KVAN2J0bYf3gxnuN3H6W6un1gHZbfhqhEEYYu8at8btnKUUiLglLl2K5603IIPnHcbI+D2kYFQTgQfNL5e1EC3f2jrL4HZNaT5FfZ6FQ6LScGAHXYNSdRviRCphv059lHA0Gm04STMVFqZS/V6y37yrrpi8Lza71Nbf7K/SezajP0EptRoXl8tV35kQAuYgyQAh+JG7PC/LnK+N7mcB5t+eofMMruHcozaQfm4k0xvNs6bo2IL4E+YGp+b/UiX2chFEs/bCNBfLVq/3jsunnkaBTOFwga/dbv8ucznhG1FeyJHyBZmel3eSoUttQNbniQsafmb/ZnPKLUGLomK8oArK6uFdHJMmaJHcfJcwhQC62t4VKPHEybSRRjZoKcCeNUDVBrJp+yTMtN6uLmFpmv9f2mnspjQX/cBm55eHsBG/gJhyBO+867UerFQ639Q+yWC2E/XdhvUvuTqLYyGVAx0QIg0Qc4pHRBlmvxfWqDp/PJpvKYdnY+HHUYwsBESCZEjukd7iTIuqjvREmbf8bsYWNXRqPtZAMMK5KN/NUn2mBncnLJFYmxPp1GfaBwbaHmn+WWk9VexW03TOj8yUbpUlsPoRbhNfR/gRqw/cqd3xxov51CuKX/bhjre3J8ajgCP7s9jpVkuxdj/a6QtWkVOLis/zbmDL7+hzLfQqp3EteN221s+oC90+U2tBiX0uTozeL9k8ZPY01ayiPu/wUFgZyU+xB9/c5upRDOSXT6Xa/9UG9PRCvqw4hONjdXHCfNZzpbJZcyECYRDCwJw87UvQ56MYHapbBdQbesZlzKILfaeqMVWsQ8Py6fvzECpMksqO5fAKmuTF1tbSlYdexzh4K9YEUCR9ih5DrEF6UwxsDSfdJJhA6nZYjGQhZWUZURjro6c4+08yskdBn/6CoZ8qD8cy9yR2foMc+Uk6Eoti9cBqajm8cqb5PVn38S2QI7MsIxLYmB9c3HIZ0Y6nB/tjgHZm78wU/wxCqDfuYfhkg99yWU7mb9Y6rWfX5ON3hisVUzlOzptR1ZTfW1SO07iJ/Pq9FevZQ0uNtyVKaq6pAYXhm2ym078Gr1ub4pqHBy9UXASVNJhOEZnXM0ducWO3HnsHV8XLF+243bEYq4QlULQjS8MQQ3pUEsOragCM3v0EYApQPF3IwolW//fycl8TUbDm/WGFzZnzqCc4VjWSLI6kKucA+mbx7FwM3JwE61WUMl3qFJaBSv9rT7lw61LU5xX1bgf5qHDYF8BTjfLwdLDBiWcU4Eh1PjsX31ME2h/05sRASyKOIQTbmoC3rHebY6bWeBWsrtBl6pM7M9SA4kyfccdD8oE4Gk+FNKwF0j6LiuyYzf0sdSd3WN9tGZcqxHqHIqMbaC/Y9exDw7K89oIB4IiEEuAKR/PmHtYJM6l5vCIw/D0Twvt0t65d2u23E1B8nwyVFyrYadW62Wx2b8wwtDxA/VCj9mol5+iTQ5jRnSvA8SsPDxNY5FblC1Uze/jfBrG9qh1mINyhcnlP+XNAwOxcxwXoc7SdTwjw1JBID7+eBBIL7lCBRG1KMb2qoBAHiimjzlnN4Zs6dNMp/XjgXB7YPAiXzc2LimeHymP+kUCfublcHBO17EykyGwgH39RYjn9KTAebmRTW5nDPh2iB0OUNxe0DLPM5HEzb7ooviRzRGbvfa3uIvOLuGExux0TflDPufvtJXbDZWTHstR4fN0mvDrI6PpTgMxJbESpLAKBAMRjglbJk+Mx5SrdpJm4V/SMZ2JmLS7lbGZb9Sw/Lxo2RuseHzHwCRV5VSwNcbnyWszvhY4VYGRmivNNxuv/IogDTN/u6TKf1eCB3ay42vnOE/dsT8+o1QkKxJ7E+ePBKnvBF/x1+8wrxBRws36Qhw//vrYkK99Qd3oU4qxkIIsZWEjawVT0AAAJxSURBVAqiB/UtakP83/9wWNXrV1faie6gm4eHo0/uG/R31XCgl9XE6wf1LQhtElY7GzmEL28T7M+uT0P8fCs439tYpG4fGg8HQZldjT8WUfDaeKv5dLeM4ON1q7eh9W7XLp5QCKGdPH6xwWYSzzf+Zt18B6N9zwzBQRcKTx9F0a4hiDAvsvvPSE6yaeo14jdDZNkmiyC3K9qlcVx9MD65S2EngTD2IGbPPc8qnwPbb2mXaqFrU7VVZDRBB/WHu8oO70HV9l+1lBUCePCU5AQQI4Flmp0u05DkcTVyR8pW0CKD7m3U/vTMPnE3ZgVECfv+pEHxo+RNVrVHCekf1mYClpU7u32mdeJDdTrp74z025Qg355O8FCWbAM8eAYsJR8ZnLByBxMg/6U6QK/RBh2eL1yvkg9biN/ejFWDDySwPo8sguR4rvrA6RPqJ80mGTxPfr8uhMDSo7/UXqpblIdFeunwEx+h/kcltlCFYuADp5P+uhRi/FFF4zVSwRdnj8dvn0ezagr4MQWZFr/3jNotzZeykAS/3v7JX5AIeTmHWArgfhicMJNqtw0IPmm+3FO0Ns7ljUbGQ1uFHiMzcJUEfs58w6dpf6TkhnLc/8CNEJalesyNX28j5KNkt4+HgLwvjewVaH4y769PHgIfWiNJU8MFp5MF/71UDN7umNJGNJCRHA7/hRjmlyAzmMhIDp/MzfhNDckPKdAvDML/TbfJ0n686JAln72Ofy2Z/iLCn16Y/heTqc2T2N70UFnjf0068NehLIkmGxf825M8QGaW+6//xjj4VyHTCvylnnz2Mv7VFPh+HvzW39/0m37TL03/D8IUkJRzPUvdAAAAAElFTkSuQm";	
							}
						}
						);	
						// for ( var i = 0; i <= value.length ; i++ ){
						// 			if (value[i].name === inp1){
						// 		var code = value[i].code;
						// 		 flag = "https://www.countryflags.io/" + code + "/flat/64.png";
						// 				break;
						// 	}
						// }
					
			// });
			// debugger;
			if (flag){
			 return flag;
			}
			 
		}
		};
		
	
});