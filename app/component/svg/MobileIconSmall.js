import React from "react";

const MobileIconSmall = () => {
  return (
    <div>
      var view = UIView() view.frame = CGRect(x: 0, y: 0, width: 254.6, height:
      525) let image0 = UIImage(named: "4.png")?.cgImage let layer0 = CALayer()
      layer0.contents = image0 layer0.transform =
      CATransform3DMakeAffineTransform(CGAffineTransform(a: 4.46, b: 0, c: 0, d:
      1.44, tx: -1.64, ty: -0.25)) layer0.bounds = view.bounds layer0.position =
      view.center view.layer.addSublayer(layer0) var parent = self.view!
      parent.addSubview(view) view.translatesAutoresizingMaskIntoConstraints =
      false view.widthAnchor.constraint(equalToConstant: 254.6).isActive = true
      view.heightAnchor.constraint(equalToConstant: 525).isActive = true
      view.centerXAnchor.constraint(equalTo: parent.centerXAnchor, constant:
      -0.2).isActive = true view.topAnchor.constraint(equalTo: parent.topAnchor,
      constant: 304).isActive = true
    </div>
  );
};

export default MobileIconSmall;
