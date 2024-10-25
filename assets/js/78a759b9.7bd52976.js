"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[3491],{5968:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>_,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=t(74848),o=t(28453);const i={sidebar_position:2},r="\u5feb\u901f\u4e0a\u624b{#quick_start}",c={id:"Advanced_development/toolchain_development/expert/quick_start",title:"\u5feb\u901f\u4e0a\u624b",description:"quick_start}",source:"@site/docs/07_Advanced_development/04_toolchain_development/expert/quick_start.md",sourceDirName:"07_Advanced_development/04_toolchain_development/expert",slug:"/Advanced_development/toolchain_development/expert/quick_start",permalink:"/rdk_doc/Advanced_development/toolchain_development/expert/quick_start",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/docs/07_Advanced_development/04_toolchain_development/expert/quick_start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u73af\u5883\u4f9d\u8d56",permalink:"/rdk_doc/Advanced_development/toolchain_development/expert/environment_config"},next:{title:"\u5f00\u53d1\u6307\u5357",permalink:"/rdk_doc/Advanced_development/toolchain_development/expert/user_guide"}},l={},d=[{value:"\u57fa\u672c\u6d41\u7a0b",id:"\u57fa\u672c\u6d41\u7a0b",level:2},{value:"\u83b7\u53d6\u6d6e\u70b9\u6a21\u578b",id:"Float-Model",level:2},{value:"Calibration",id:"Calibration",level:2},{value:"\u91cf\u5316\u8bad\u7ec3",id:"\u91cf\u5316\u8bad\u7ec3",level:2},{value:"\u8f6c\u5b9a\u70b9\u6a21\u578b",id:"\u8f6c\u5b9a\u70b9\u6a21\u578b",level:2},{value:"\u6a21\u578b\u90e8\u7f72",id:"\u6a21\u578b\u90e8\u7f72",level:2}];function s(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"quick_start",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,a.jsxs)(e.p,{children:["Horizon Plugin Pytorch (\u4e0b\u79f0 Plugin ) \u53c2\u8003\u4e86 PyTorch \u5b98\u65b9\u7684\u91cf\u5316\u63a5\u53e3\u548c\u601d\u8def\uff0cPlugin \u91c7\u7528\u7684\u662f Quantization Aware Training(QAT) \u65b9\u6848\uff0c\u56e0\u6b64\u5efa\u8bae\u7528\u6237\u5148\u9605\u8bfb ",(0,a.jsx)(e.a,{href:"https://pytorch.org/docs/stable/quantization.html#quantization",children:(0,a.jsx)(e.strong,{children:"PyTorch \u5b98\u65b9\u6587\u6863"})}),"\u4e2d\u548c QAT \u76f8\u5173\u90e8\u5206\uff0c\u719f\u6089 PyTorch \u63d0\u4f9b\u7684\u91cf\u5316\u8bad\u7ec3\u548c\u90e8\u7f72\u5de5\u5177\u7684\u4f7f\u7528\u65b9\u6cd5\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u57fa\u672c\u6d41\u7a0b",children:"\u57fa\u672c\u6d41\u7a0b"}),"\n",(0,a.jsx)(e.p,{children:"\u91cf\u5316\u8bad\u7ec3\u5de5\u5177\u7684\u57fa\u672c\u4f7f\u7528\u6d41\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"quick_start",src:t(34905).A+""})}),"\n",(0,a.jsxs)(e.p,{children:["\u4e0b\u9762\u4ee5 ",(0,a.jsx)(e.code,{children:"torchvision"})," \u4e2d\u7684 ",(0,a.jsx)(e.code,{children:"MobileNetV2"})," \u6a21\u578b\u4e3a\u4f8b\uff0c\u4ecb\u7ecd\u6d41\u7a0b\u4e2d\u6bcf\u4e2a\u9636\u6bb5\u7684\u5177\u4f53\u64cd\u4f5c\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["\u51fa\u4e8e\u6d41\u7a0b\u5c55\u793a\u7684\u6267\u884c\u901f\u5ea6\u8003\u8651\uff0c\u6211\u4eec\u4f7f\u7528\u4e86 ",(0,a.jsx)(e.code,{children:"cifar-10"})," \u6570\u636e\u96c6\uff0c\u800c\u4e0d\u662f ImageNet-1K \u6570\u636e\u96c6\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'\n    import os\n    import copy\n    import numpy as np\n    import torch\n    import torch.nn as nn\n    import torchvision.transforms as transforms\n    from torch import Tensor\n    from torch.quantization import DeQuantStub\n    from torchvision.datasets import CIFAR10\n    from torchvision.models.mobilenetv2 import MobileNetV2\n    from torch.utils import data\n    from typing import Optional, Callable, List, Tuple\n\n    from horizon_plugin_pytorch.functional import rgb2centered_yuv\n\n    import torch.quantization\n    from horizon_plugin_pytorch.march import March, set_march\n    from horizon_plugin_pytorch.quantization import (\n        QuantStub,\n        convert_fx,\n        prepare_qat_fx,\n        set_fake_quantize,\n        FakeQuantState,\n        check_model,\n        compile_model,\n        perf_model,\n        visualize_model,\n    )\n    from horizon_plugin_pytorch.quantization.qconfig import (\n        default_calib_8bit_fake_quant_qconfig,\n        default_qat_8bit_fake_quant_qconfig,\n        default_qat_8bit_weight_32bit_out_fake_quant_qconfig,\n        default_calib_8bit_weight_32bit_out_fake_quant_qconfig,\n    )\n\n    import logging\n    logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'    class AverageMeter(object):\n    """Computes and stores the average and current value"""\n\n    def __init__(self, name: str, fmt=":f"):\n        self.name = name\n        self.fmt = fmt\n        self.reset()\n\n    def reset(self):\n        self.val = 0\n        self.avg = 0\n        self.sum = 0\n        self.count = 0\n\n    def update(self, val, n=1):\n        self.val = val\n        self.sum += val * n\n        self.count += n\n        self.avg = self.sum / self.count\n\n    def __str__(self):\n        fmtstr = "{name} {val" + self.fmt + "} ({avg" + self.fmt + "})"\n        return fmtstr.format(**self.__dict__)\n\n\n    def accuracy(output: Tensor, target: Tensor, topk=(1,)) -> List[Tensor]:\n        """Computes the accuracy over the k top predictions for the specified\n        values of k\n        """\n        with torch.no_grad():\n            maxk = max(topk)\n            batch_size = target.size(0)\n\n            _, pred = output.topk(maxk, 1, True, True)\n            pred = pred.t()\n            correct = pred.eq(target.view(1, -1).expand_as(pred))\n\n            res = []\n            for k in topk:\n                correct_k = correct[:k].float().sum()\n                res.append(correct_k.mul_(100.0 / batch_size))\n            return res\n\n\n    def evaluate(\n        model: nn.Module, data_loader: data.DataLoader, device: torch.device\n    ) -> Tuple[AverageMeter, AverageMeter]:\n        top1 = AverageMeter("Acc@1", ":6.2f")\n        top5 = AverageMeter("Acc@5", ":6.2f")\n\n        with torch.no_grad():\n            for image, target in data_loader:\n                image, target = image.to(device), target.to(device)\n                output = model(image)\n                output = output.view(-1, 10)\n                acc1, acc5 = accuracy(output, target, topk=(1, 5))\n                top1.update(acc1, image.size(0))\n                top5.update(acc5, image.size(0))\n                print(".", end="", flush=True)\n            print()\n\n        return top1, top5\n\n\n    def train_one_epoch(\n        model: nn.Module,\n        criterion: Callable,\n        optimizer: torch.optim.Optimizer,\n        scheduler: Optional[torch.optim.lr_scheduler._LRScheduler],\n        data_loader: data.DataLoader,\n        device: torch.device,\n    ) -> None:\n        top1 = AverageMeter("Acc@1", ":6.3f")\n        top5 = AverageMeter("Acc@5", ":6.3f")\n        avgloss = AverageMeter("Loss", ":1.5f")\n\n        model.to(device)\n\n        for image, target in data_loader:\n            image, target = image.to(device), target.to(device)\n            output = model(image)\n            output = output.view(-1, 10)\n            loss = criterion(output, target)\n            optimizer.zero_grad()\n            loss.backward()\n            optimizer.step()\n            if scheduler is not None:\n                scheduler.step()\n            acc1, acc5 = accuracy(output, target, topk=(1, 5))\n            top1.update(acc1, image.size(0))\n            top5.update(acc5, image.size(0))\n            avgloss.update(loss, image.size(0))\n            print(".", end="", flush=True)\n        print()\n\n        print(\n            "Full cifar-10 train set: Loss {:.3f} Acc@1"\n            " {:.3f} Acc@5 {:.3f}".format(avgloss.avg, top1.avg, top5.avg)\n        )\n\n'})}),"\n",(0,a.jsx)(e.h2,{id:"Float-Model",children:"\u83b7\u53d6\u6d6e\u70b9\u6a21\u578b"}),"\n",(0,a.jsx)(e.p,{children:"\u9996\u5148\uff0c\u5bf9\u6d6e\u70b9\u6a21\u578b\u505a\u5fc5\u8981\u7684\u6539\u9020\uff0c\u4ee5\u652f\u6301\u91cf\u5316\u76f8\u5173\u64cd\u4f5c\u3002\u6a21\u578b\u6539\u9020\u5fc5\u8981\u7684\u64cd\u4f5c\u6709\uff1a"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["\u5728\u6a21\u578b\u8f93\u5165\u524d\u63d2\u5165 ",(0,a.jsx)(e.code,{children:"QuantStub"})]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["\u5728\u6a21\u578b\u8f93\u51fa\u540e\u63d2\u5165 ",(0,a.jsx)(e.code,{children:"DequantStub"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"\u6539\u9020\u6a21\u578b\u65f6\u9700\u8981\u6ce8\u610f\uff1a"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["\u63d2\u5165\u7684 ",(0,a.jsx)(e.code,{children:"QuantStub"})," \u548c ",(0,a.jsx)(e.code,{children:"DequantStub"})," \u5fc5\u987b\u6ce8\u518c\u4e3a\u6a21\u578b\u7684\u5b50\u6a21\u5757\uff0c\u5426\u5219\u5c06\u65e0\u6cd5\u6b63\u786e\u5904\u7406\u5b83\u4eec\u7684\u91cf\u5316\u72b6\u6001"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["\u591a\u4e2a\u8f93\u5165\u4ec5\u5728 ",(0,a.jsx)(e.code,{children:"scale"})," \u76f8\u540c\u65f6\u53ef\u4ee5\u5171\u4eab ",(0,a.jsx)(e.code,{children:"QuantStub"}),"\uff0c\u5426\u5219\u8bf7\u4e3a\u6bcf\u4e2a\u8f93\u5165\u5b9a\u4e49\u5355\u72ec\u7684 ",(0,a.jsx)(e.code,{children:"QuantStub"})]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["\u82e5\u9700\u8981\u5c06\u4e0a\u677f\u65f6\u8f93\u5165\u7684\u6570\u636e\u6765\u6e90\u6307\u5b9a\u4e3a ",(0,a.jsx)(e.code,{children:'"pyramid"'}),"\uff0c\u8bf7\u624b\u52a8\u8bbe\u7f6e\u5bf9\u5e94 ",(0,a.jsx)(e.code,{children:"QuantStub"})," \u7684 ",(0,a.jsx)(e.code,{children:"scale"})," \u53c2\u6570\u4e3a 1/128"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,a.jsx)(e.code,{children:"torch.quantization.QuantStub"}),"\uff0c\u4f46\u662f\u4ec5\u6709 ",(0,a.jsx)(e.code,{children:"horizon_plugin_pytorch.quantization.QuantStub"})," \u652f\u6301\u901a\u8fc7\u53c2\u6570\u624b\u52a8\u56fa\u5b9a scale"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"\u6539\u9020\u540e\u7684\u6a21\u578b\u53ef\u4ee5\u65e0\u7f1d\u52a0\u8f7d\u6539\u9020\u524d\u6a21\u578b\u7684\u53c2\u6570\uff0c\u56e0\u6b64\u82e5\u5df2\u6709\u8bad\u7ec3\u597d\u7684\u6d6e\u70b9\u6a21\u578b\uff0c\u76f4\u63a5\u52a0\u8f7d\u5373\u53ef\uff0c\u5426\u5219\u9700\u8981\u6b63\u5e38\u8fdb\u884c\u6d6e\u70b9\u8bad\u7ec3\u3002"}),"\n",(0,a.jsx)(e.admonition,{title:"\u6ce8\u610f",type:"caution",children:(0,a.jsxs)(e.p,{children:["\u6a21\u578b\u4e0a\u677f\u65f6\u7684\u8f93\u5165\u56fe\u50cf\u6570\u636e\u4e00\u822c\u4e3a centered_yuv444 \u683c\u5f0f\uff0c\u56e0\u6b64\u6a21\u578b\u8bad\u7ec3\u65f6\u9700\u8981\u628a\u56fe\u50cf\u8f6c\u6362\u6210 centered_yuv444 \u683c\u5f0f\uff08\u6ce8\u610f\u4e0b\u9762\u4ee3\u7801\u4e2d\u5bf9 ",(0,a.jsx)(e.code,{children:"rgb2centered_yuv"})," \u7684\u4f7f\u7528\uff09\u3002\n\u5982\u679c\u65e0\u6cd5\u8f6c\u6362\u6210 centered_yuv444 \u683c\u5f0f\u8fdb\u884c\u6a21\u578b\u8bad\u7ec3\uff0c\u8bf7\u53c2\u8003 ",(0,a.jsx)(e.a,{href:"./advanced_content#rgb888-%E6%95%B0%E6%8D%AE%E9%83%A8%E7%BD%B2",children:(0,a.jsx)(e.strong,{children:"RGB888 \u6570\u636e\u90e8\u7f72"})})," \u7ae0\u8282\u4e2d\u7684\u4ecb\u7ecd\uff0c\u5bf9\u6a21\u578b\u505a\u76f8\u5e94\u7684\u6539\u9020\u3002\uff08\u6ce8\u610f\uff0c\u8be5\u65b9\u6cd5\u53ef\u80fd\u5bfc\u81f4\u6a21\u578b\u7cbe\u5ea6\u964d\u4f4e\uff09\n\u672c\u793a\u4f8b\u4e2d\u6d6e\u70b9\u548c QAT \u8bad\u7ec3\u7684 epoch \u8f83\u5c11\uff0c\u4ec5\u4e3a\u8bf4\u660e\u8bad\u7ec3\u5de5\u5177\u4f7f\u7528\u6d41\u7a0b\uff0c\u7cbe\u5ea6\u4e0d\u4ee3\u8868\u6a21\u578b\u6700\u597d\u6c34\u5e73\u3002"]})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'\n    ######################################################################\n    # \u7528\u6237\u53ef\u6839\u636e\u9700\u8981\u4fee\u6539\u4ee5\u4e0b\u53c2\u6570\n    # 1. \u6a21\u578b ckpt \u548c\u7f16\u8bd1\u4ea7\u51fa\u7269\u7684\u4fdd\u5b58\u8def\u5f84\n    model_path = "model/mobilenetv2"\n    # 2. \u6570\u636e\u96c6\u4e0b\u8f7d\u548c\u4fdd\u5b58\u7684\u8def\u5f84\n    data_path = "data"\n    # 3. \u8bad\u7ec3\u65f6\u4f7f\u7528\u7684 batch_size\n    train_batch_size = 256\n    # 4. \u9884\u6d4b\u65f6\u4f7f\u7528\u7684 batch_size\n    eval_batch_size = 256\n    # 5. \u8bad\u7ec3\u7684 epoch \u6570\n    epoch_num = 30\n    # 6. \u6a21\u578b\u4fdd\u5b58\u548c\u6267\u884c\u8ba1\u7b97\u4f7f\u7528\u7684 device\n    device = (\n        torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")\n    )\n    ######################################################################\n\n\n    # \u51c6\u5907\u6570\u636e\u96c6\uff0c\u8bf7\u6ce8\u610f collate_fn \u4e2d\u5bf9 rgb2centered_yuv \u7684\u4f7f\u7528\n    def prepare_data_loaders(\n        data_path: str, train_batch_size: int, eval_batch_size: int\n    ) -> Tuple[data.DataLoader, data.DataLoader]:\n        normalize = transforms.Normalize(mean=0.0, std=128.0)\n\n        def collate_fn(batch):\n            batched_img = torch.stack(\n                [\n                    torch.from_numpy(np.array(example[0], np.uint8, copy=True))\n                    for example in batch\n                ]\n            ).permute(0, 3, 1, 2)\n            batched_target = torch.tensor([example[1] for example in batch])\n\n            batched_img = rgb2centered_yuv(batched_img)\n            batched_img = normalize(batched_img.float())\n\n            return batched_img, batched_target\n\n        train_dataset = CIFAR10(\n            data_path,\n            True,\n            transforms.Compose(\n                [\n                    transforms.RandomHorizontalFlip(),\n                    transforms.RandAugment(),\n                ]\n            ),\n            download=True,\n        )\n\n        eval_dataset = CIFAR10(\n            data_path,\n            False,\n            download=True,\n        )\n\n        train_data_loader = data.DataLoader(\n            train_dataset,\n            batch_size=train_batch_size,\n            sampler=data.RandomSampler(train_dataset),\n            num_workers=8,\n            collate_fn=collate_fn,\n            pin_memory=True,\n        )\n\n        eval_data_loader = data.DataLoader(\n            eval_dataset,\n            batch_size=eval_batch_size,\n            sampler=data.SequentialSampler(eval_dataset),\n            num_workers=8,\n            collate_fn=collate_fn,\n            pin_memory=True,\n        )\n\n        return train_data_loader, eval_data_loader\n\n\n    # \u5bf9\u6d6e\u70b9\u6a21\u578b\u505a\u5fc5\u8981\u7684\u6539\u9020\n    class FxQATReadyMobileNetV2(MobileNetV2):\n        def __init__(\n            self,\n            num_classes: int = 10,\n            width_mult: float = 1.0,\n            inverted_residual_setting: Optional[List[List[int]]] = None,\n            round_nearest: int = 8,\n        ):\n            super().__init__(\n                num_classes, width_mult, inverted_residual_setting, round_nearest\n            )\n            self.quant = QuantStub(scale=1 / 128)\n            self.dequant = DeQuantStub()\n\n        def forward(self, x: Tensor) -> Tensor:\n            x = self.quant(x)\n            x = super().forward(x)\n            x = self.dequant(x)\n\n            return x\n\n\n    if not os.path.exists(model_path):\n        os.makedirs(model_path, exist_ok=True)\n\n    # \u6d6e\u70b9\u6a21\u578b\u521d\u59cb\u5316\n    float_model = FxQATReadyMobileNetV2()\n\n    # \u51c6\u5907\u6570\u636e\u96c6\n    train_data_loader, eval_data_loader = prepare_data_loaders(\n        data_path, train_batch_size, eval_batch_size\n    )\n\n    # \u7531\u4e8e\u6a21\u578b\u7684\u6700\u540e\u4e00\u5c42\u548c\u9884\u8bad\u7ec3\u6a21\u578b\u4e0d\u4e00\u81f4\uff0c\u9700\u8981\u8fdb\u884c\u6d6e\u70b9 finetune\n    optimizer = torch.optim.Adam(\n        float_model.parameters(), lr=0.001, weight_decay=1e-3\n    )\n    best_acc = 0\n\n    for nepoch in range(epoch_num):\n        float_model.train()\n        train_one_epoch(\n            float_model,\n            nn.CrossEntropyLoss(),\n            optimizer,\n            None,\n            train_data_loader,\n            device,\n        )\n\n        # \u6d6e\u70b9\u7cbe\u5ea6\u6d4b\u8bd5\n        float_model.eval()\n        top1, top5 = evaluate(float_model, eval_data_loader, device)\n\n        print(\n            "Float Epoch {}: evaluation Acc@1 {:.3f} Acc@5 {:.3f}".format(\n                nepoch, top1.avg, top5.avg\n            )\n        )\n\n        if top1.avg > best_acc:\n            best_acc = top1.avg\n            # \u4fdd\u5b58\u6700\u4f73\u6d6e\u70b9\u6a21\u578b\u53c2\u6570\n            torch.save(\n                float_model.state_dict(),\n                os.path.join(model_path, "float-checkpoint.ckpt"),\n            )\n\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"\n    Files already downloaded and verified\n    Files already downloaded and verified\n    ....................................................................................................................................................................................................\n    Full cifar-10 train set: Loss 2.158 Acc@1 19.574 Acc@5 68.712\n    ........................................\n    Float Epoch 0: evaluation Acc@1 30.270 Acc@5 84.650\n    ....................................................................................................................................................................................................\n    Full cifar-10 train set: Loss 1.855 Acc@1 31.136 Acc@5 82.658\n    ........................................\n    Float Epoch 1: evaluation Acc@1 40.310 Acc@5 89.640\n    ....................................................................................................................................................................................................\n    Full cifar-10 train set: Loss 1.693 Acc@1 37.250 Acc@5 87.292\n    ........................................\n    Float Epoch 2: evaluation Acc@1 46.500 Acc@5 92.000\n    ....................................................................................................................................................................................................\n    Full cifar-10 train set: Loss 1.596 Acc@1 41.956 Acc@5 89.068\n    ........................................\n    Float Epoch 3: evaluation Acc@1 48.400 Acc@5 92.650\n    ....................................................................................................................................................................................................\n    Full cifar-10 train set: Loss 1.520 Acc@1 44.974 Acc@5 90.322\n    ........................................\n    Float Epoch 4: evaluation Acc@1 52.620 Acc@5 93.360\n    ....................................................................................................................................................................................................\n    Full cifar-10 train set: Loss 1.441 Acc@1 48.216 Acc@5 91.434\n    ........................................\n    ...\n    ....................................................................................................................................................................................................\n    Full cifar-10 train set: Loss 0.722 Acc@1 75.058 Acc@5 98.132\n    ........................................\n    Float Epoch 29: evaluation Acc@1 75.940 Acc@5 98.030\n\n"})}),"\n",(0,a.jsx)(e.h2,{id:"Calibration",children:"Calibration"}),"\n",(0,a.jsx)(e.p,{children:"\u6a21\u578b\u6539\u9020\u5b8c\u6210\u5e76\u5b8c\u6210\u6d6e\u70b9\u8bad\u7ec3\u540e\uff0c\u4fbf\u53ef\u8fdb\u884c Calibration\u3002\u6b64\u8fc7\u7a0b\u901a\u8fc7\u5728\u6a21\u578b\u4e2d\u63d2\u5165 Observer \u7684\u65b9\u5f0f\uff0c\u5728 forward \u8fc7\u7a0b\u4e2d\u7edf\u8ba1\u5404\u5904\u7684\u6570\u636e\u5206\u5e03\u60c5\u51b5\uff0c\u4ece\u800c\u8ba1\u7b97\u51fa\u5408\u7406\u7684\u91cf\u5316\u53c2\u6570\uff1a"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u5bf9\u4e8e\u90e8\u5206\u6a21\u578b\uff0c\u4ec5\u901a\u8fc7 Calibration \u4fbf\u53ef\u4f7f\u7cbe\u5ea6\u8fbe\u5230\u8981\u6c42\uff0c\u4e0d\u5fc5\u8fdb\u884c\u6bd4\u8f83\u8017\u65f6\u7684\u91cf\u5316\u611f\u77e5\u8bad\u7ec3\u3002"}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u5373\u4f7f\u6a21\u578b\u7ecf\u8fc7\u91cf\u5316\u6821\u51c6\u540e\u65e0\u6cd5\u6ee1\u8db3\u7cbe\u5ea6\u8981\u6c42\uff0c\u6b64\u8fc7\u7a0b\u4e5f\u53ef\u964d\u4f4e\u540e\u7eed\u91cf\u5316\u611f\u77e5\u8bad\u7ec3\u7684\u96be\u5ea6\uff0c\u7f29\u77ed\u8bad\u7ec3\u65f6\u95f4\uff0c\u63d0\u5347\u6700\u7ec8\u7684\u8bad\u7ec3\u7cbe\u5ea6\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'\n    ######################################################################\n    # \u7528\u6237\u53ef\u6839\u636e\u9700\u8981\u4fee\u6539\u4ee5\u4e0b\u53c2\u6570\n    # 1. Calibration \u65f6\u4f7f\u7528\u7684 batch_size\n    calib_batch_size = 256\n    # 2. Validation \u65f6\u4f7f\u7528\u7684 batch_size\n    eval_batch_size = 256\n    # 3. Calibration \u4f7f\u7528\u7684\u6570\u636e\u91cf\uff0c\u914d\u7f6e\u4e3a inf \u4ee5\u4f7f\u7528\u5168\u90e8\u6570\u636e\n    num_examples = float("inf")\n    # 4. \u76ee\u6807\u786c\u4ef6\u5e73\u53f0\u7684\u4ee3\u53f7\n    march = March.BAYES\n    ######################################################################\n\n    # \u5728\u8fdb\u884c\u6a21\u578b\u8f6c\u5316\u524d\uff0c\u5fc5\u987b\u8bbe\u7f6e\u597d\u6a21\u578b\u5c06\u8981\u6267\u884c\u7684\u786c\u4ef6\u5e73\u53f0\n    set_march(march)\n\n\n    # \u5c06\u6a21\u578b\u8f6c\u5316\u4e3a Calibration \u72b6\u6001\uff0c\u4ee5\u7edf\u8ba1\u5404\u5904\u6570\u636e\u7684\u6570\u503c\u5206\u5e03\u7279\u5f81\n    calib_model = prepare_qat_fx(\n        # \u8f93\u51fa\u6a21\u578b\u4f1a\u5171\u4eab\u8f93\u5165\u6a21\u578b\u7684 attributes\uff0c\u4e3a\u4e0d\u5f71\u54cd float_model \u7684\u540e\u7eed\u4f7f\u7528,\n        # \u6b64\u5904\u8fdb\u884c\u4e86 deepcopy\n        copy.deepcopy(float_model),\n        {\n            "": default_calib_8bit_fake_quant_qconfig,\n            "module_name": {\n                # \u5728\u6a21\u578b\u7684\u8f93\u51fa\u5c42\u4e3a Conv \u6216 Linear \u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 out_qconfig\n                # \u914d\u7f6e\u4e3a\u9ad8\u7cbe\u5ea6\u8f93\u51fa\n                "classifier": default_calib_8bit_weight_32bit_out_fake_quant_qconfig,\n            },\n        },\n    ).to(\n        device\n    )  # prepare_qat_fx \u63a5\u53e3\u4e0d\u4fdd\u8bc1\u8f93\u51fa\u6a21\u578b\u7684 device \u548c\u8f93\u5165\u6a21\u578b\u5b8c\u5168\u4e00\u81f4\n\n    # \u51c6\u5907\u6570\u636e\u96c6\n    calib_data_loader, eval_data_loader = prepare_data_loaders(\n        data_path, calib_batch_size, eval_batch_size\n    )\n\n    # \u6267\u884c Calibration \u8fc7\u7a0b\uff08\u4e0d\u9700\u8981 backward\uff09\n    # \u6ce8\u610f\u6b64\u5904\u5bf9\u6a21\u578b\u72b6\u6001\u7684\u63a7\u5236\uff0c\u6a21\u578b\u9700\u8981\u5904\u4e8e eval \u72b6\u6001\u4ee5\u4f7f Bn \u7684\u884c\u4e3a\u7b26\u5408\u8981\u6c42\n    calib_model.eval()\n    set_fake_quantize(calib_model, FakeQuantState.CALIBRATION)\n    with torch.no_grad():\n        cnt = 0\n        for image, target in calib_data_loader:\n            image, target = image.to(device), target.to(device)\n            calib_model(image)\n            print(".", end="", flush=True)\n            cnt += image.size(0)\n            if cnt >= num_examples:\n                break\n        print()\n\n    # \u6d4b\u8bd5\u4f2a\u91cf\u5316\u7cbe\u5ea6\n    # \u6ce8\u610f\u6b64\u5904\u5bf9\u6a21\u578b\u72b6\u6001\u7684\u63a7\u5236\n    calib_model.eval()\n    set_fake_quantize(calib_model, FakeQuantState.VALIDATION)\n\n    top1, top5 = evaluate(\n        calib_model,\n        eval_data_loader,\n        device,\n    )\n    print(\n        "Calibration: evaluation Acc@1 {:.3f} Acc@5 {:.3f}".format(\n            top1.avg, top5.avg\n        )\n    )\n\n    # \u4fdd\u5b58 Calibration \u6a21\u578b\u53c2\u6570\n    torch.save(\n        calib_model.state_dict(),\n        os.path.join(model_path, "calib-checkpoint.ckpt"),\n    )\n\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"\n    Files already downloaded and verified\n    Files already downloaded and verified\n    ....................................................................................................................................................................................................\n    ........................................\n    Calibration: evaluation Acc@1 76.190 Acc@5 98.180\n\n"})}),"\n",(0,a.jsxs)(e.p,{children:["\u6a21\u578b\u7ecf\u8fc7 Calibration \u540e\u7684\u91cf\u5316\u7cbe\u5ea6\u82e5\u5df2\u6ee1\u8db3\u8981\u6c42\uff0c\u4fbf\u53ef\u76f4\u63a5\u8fdb\u884c ",(0,a.jsx)(e.strong,{children:"\u8f6c\u5b9a\u70b9\u6a21\u578b"})," \u7684\u6b65\u9aa4\uff0c\u5426\u5219\u9700\u8981\u8fdb\u884c ",(0,a.jsx)(e.strong,{children:"\u91cf\u5316\u8bad\u7ec3"})," \u8fdb\u4e00\u6b65\u63d0\u5347\u7cbe\u5ea6\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u91cf\u5316\u8bad\u7ec3",children:"\u91cf\u5316\u8bad\u7ec3"}),"\n",(0,a.jsx)(e.p,{children:"\u91cf\u5316\u8bad\u7ec3\u901a\u8fc7\u5728\u6a21\u578b\u4e2d\u63d2\u5165\u4f2a\u91cf\u5316\u8282\u70b9\u7684\u65b9\u5f0f\uff0c\u5728\u8bad\u7ec3\u8fc7\u7a0b\u4e2d\u4f7f\u6a21\u578b\u611f\u77e5\u5230\u91cf\u5316\u5e26\u6765\u7684\u5f71\u54cd\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u5bf9\u6a21\u578b\u53c2\u6570\u8fdb\u884c\u5fae\u8c03\uff0c\u4ee5\u63d0\u5347\u91cf\u5316\u540e\u7684\u7cbe\u5ea6\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'\n    ######################################################################\n    # \u7528\u6237\u53ef\u6839\u636e\u9700\u8981\u4fee\u6539\u4ee5\u4e0b\u53c2\u6570\n    # 1. \u8bad\u7ec3\u65f6\u4f7f\u7528\u7684 batch_size\n    train_batch_size = 256\n    # 2. Validation \u65f6\u4f7f\u7528\u7684 batch_size\n    eval_batch_size = 256\n    # 3. \u8bad\u7ec3\u7684 epoch \u6570\n    epoch_num = 3\n    ######################################################################\n\n    # \u51c6\u5907\u6570\u636e\u96c6\n    train_data_loader, eval_data_loader = prepare_data_loaders(\n        data_path, train_batch_size, eval_batch_size\n    )\n\n    # \u5c06\u6a21\u578b\u8f6c\u4e3a QAT \u72b6\u6001\n    qat_model = prepare_qat_fx(\n        copy.deepcopy(float_model),\n        {\n            "": default_qat_8bit_fake_quant_qconfig,\n            "module_name": {\n                "classifier": default_qat_8bit_weight_32bit_out_fake_quant_qconfig,\n            },\n        },\n    ).to(device)\n\n    # \u52a0\u8f7d Calibration \u6a21\u578b\u4e2d\u7684\u91cf\u5316\u53c2\u6570\n    qat_model.load_state_dict(calib_model.state_dict())\n\n    # \u8fdb\u884c\u91cf\u5316\u611f\u77e5\u8bad\u7ec3\n    # \u4f5c\u4e3a\u4e00\u4e2a filetune \u8fc7\u7a0b\uff0c\u91cf\u5316\u611f\u77e5\u8bad\u7ec3\u4e00\u822c\u9700\u8981\u8bbe\u5b9a\u8f83\u5c0f\u7684\u5b66\u4e60\u7387\n    optimizer = torch.optim.Adam(\n        qat_model.parameters(), lr=1e-3, weight_decay=1e-4\n    )\n\n    best_acc = 0\n\n    for nepoch in range(epoch_num):\n        # \u6ce8\u610f\u6b64\u5904\u5bf9 QAT \u6a21\u578b training \u72b6\u6001\u7684\u63a7\u5236\u65b9\u6cd5\n        qat_model.train()\n        set_fake_quantize(qat_model, FakeQuantState.QAT)\n\n        train_one_epoch(\n            qat_model,\n            nn.CrossEntropyLoss(),\n            optimizer,\n            None,\n            train_data_loader,\n            device,\n        )\n\n        # \u6ce8\u610f\u6b64\u5904\u5bf9 QAT \u6a21\u578b eval \u72b6\u6001\u7684\u63a7\u5236\u65b9\u6cd5\n        qat_model.eval()\n        set_fake_quantize(qat_model, FakeQuantState.VALIDATION)\n\n        top1, top5 = evaluate(\n            qat_model,\n            eval_data_loader,\n            device,\n        )\n        print(\n            "QAT Epoch {}: evaluation Acc@1 {:.3f} Acc@5 {:.3f}".format(\n                nepoch, top1.avg, top5.avg\n            )\n        )\n\n        if top1.avg > best_acc:\n            best_acc = top1.avg\n\n            torch.save(\n                qat_model.state_dict(),\n                os.path.join(model_path, "qat-checkpoint.ckpt"),\n            )\n\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"\n    Files already downloaded and verified\n    Files already downloaded and verified\n    ....................................................................................................................................................................................................\n    Full cifar-10 train set: Loss 0.770 Acc@1 73.462 Acc@5 97.816\n    ........................................\n    QAT Epoch 0: evaluation Acc@1 77.620 Acc@5 98.310\n    ....................................................................................................................................................................................................\n    Full cifar-10 train set: Loss 0.737 Acc@1 74.494 Acc@5 98.016\n    ........................................\n    QAT Epoch 1: evaluation Acc@1 76.590 Acc@5 98.370\n    ....................................................................................................................................................................................................\n    Full cifar-10 train set: Loss 0.732 Acc@1 74.830 Acc@5 98.066\n    ........................................\n    QAT Epoch 2: evaluation Acc@1 77.950 Acc@5 98.480\n\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u8f6c\u5b9a\u70b9\u6a21\u578b",children:"\u8f6c\u5b9a\u70b9\u6a21\u578b"}),"\n",(0,a.jsx)(e.p,{children:"\u4f2a\u91cf\u5316\u7cbe\u5ea6\u8fbe\u6807\u540e\uff0c\u4fbf\u53ef\u5c06\u6a21\u578b\u8f6c\u4e3a\u5b9a\u70b9\u6a21\u578b\u3002\u4e00\u822c\u8ba4\u4e3a\u5b9a\u70b9\u6a21\u578b\u7684\u7ed3\u679c\u548c\u7f16\u8bd1\u540e\u6a21\u578b\u7684\u7ed3\u679c\u662f\u5b8c\u5168\u4e00\u81f4\u7684\u3002"}),"\n",(0,a.jsx)(e.admonition,{title:"\u6ce8\u610f",type:"caution",children:(0,a.jsx)(e.p,{children:"\u5b9a\u70b9\u6a21\u578b\u548c\u4f2a\u91cf\u5316\u6a21\u578b\u4e4b\u95f4\u65e0\u6cd5\u505a\u5230\u5b8c\u5168\u6570\u503c\u4e00\u81f4\uff0c\u6240\u4ee5\u8bf7\u4ee5\u5b9a\u70b9\u6a21\u578b\u7684\u7cbe\u5ea6\u4e3a\u51c6\u3002\u82e5\u5b9a\u70b9\u7cbe\u5ea6\u4e0d\u8fbe\u6807\uff0c\u9700\u8981\u7ee7\u7eed\u8fdb\u884c\u91cf\u5316\u8bad\u7ec3\u3002"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'\n    ######################################################################\n    # \u7528\u6237\u53ef\u6839\u636e\u9700\u8981\u4fee\u6539\u4ee5\u4e0b\u53c2\u6570\n    # 1. \u4f7f\u7528\u54ea\u4e2a\u6a21\u578b\u4f5c\u4e3a\u6d41\u7a0b\u7684\u8f93\u5165\uff0c\u53ef\u4ee5\u9009\u62e9 calib_model \u6216 qat_model\n    base_model = qat_model\n    ######################################################################\n\n    # \u5c06\u6a21\u578b\u8f6c\u4e3a\u5b9a\u70b9\u72b6\u6001\n    quantized_model = convert_fx(base_model).to(device)\n\n    # \u6d4b\u8bd5\u5b9a\u70b9\u6a21\u578b\u7cbe\u5ea6\n    top1, top5 = evaluate(\n        quantized_model,\n        eval_data_loader,\n        device,\n    )\n    print(\n        "Quantized model: evaluation Acc@1 {:.3f} Acc@5 {:.3f}".format(\n            top1.avg, top5.avg\n        )\n    )\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"\n    ........................................\n    Quantized model: evaluation Acc@1 78.000 Acc@5 98.480\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u6a21\u578b\u90e8\u7f72",children:"\u6a21\u578b\u90e8\u7f72"}),"\n",(0,a.jsx)(e.p,{children:"\u6d4b\u8bd5\u5b9a\u70b9\u6a21\u578b\u7cbe\u5ea6\u5e76\u786e\u8ba4\u7b26\u5408\u8981\u6c42\u540e\uff0c\u4fbf\u53ef\u4ee5\u8fdb\u884c\u6a21\u578b\u90e8\u7f72\u7684\u76f8\u5173\u6d41\u7a0b\uff0c\u5305\u62ec\u6a21\u578b\u68c0\u67e5\u3001\u7f16\u8bd1\u3001\u6027\u80fd\u6d4b\u8bd5\u548c\u53ef\u89c6\u5316\u3002"}),"\n",(0,a.jsx)(e.admonition,{title:"\u6ce8\u610f",type:"caution",children:(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u4e5f\u53ef\u4ee5\u8df3\u8fc7 Calibration \u548c\u91cf\u5316\u611f\u77e5\u8bad\u7ec3\u4e2d\u7684\u5b9e\u9645\u6821\u51c6\u548c\u8bad\u7ec3\u8fc7\u7a0b\uff0c\u5148\u76f4\u63a5\u8fdb\u884c\u6a21\u578b\u68c0\u67e5\uff0c\u4ee5\u4fdd\u8bc1\u6a21\u578b\u4e2d\u4e0d\u5b58\u5728\u65e0\u6cd5\u7f16\u8bd1\u7684\u64cd\u4f5c\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u7531\u4e8e\u7f16\u8bd1\u5668\u53ea\u652f\u6301 CPU\uff0c\u56e0\u6b64\u6a21\u578b\u548c\u6570\u636e\u5fc5\u987b\u653e\u5728 CPU \u4e0a\u3002"}),"\n"]})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'\n    ######################################################################\n    # \u7528\u6237\u53ef\u6839\u636e\u9700\u8981\u4fee\u6539\u4ee5\u4e0b\u53c2\u6570\n    # 1. \u7f16\u8bd1\u65f6\u542f\u7528\u7684\u4f18\u5316\u7b49\u7ea7\uff0c\u53ef\u9009 0~3\uff0c\u7b49\u7ea7\u8d8a\u9ad8\u7f16\u8bd1\u51fa\u7684\u6a21\u578b\u4e0a\u677f\u6267\u884c\u901f\u5ea6\u8d8a\u5feb\uff0c\n    #    \u4f46\u7f16\u8bd1\u8fc7\u7a0b\u4f1a\u6162\n    compile_opt = "O1"\n    ######################################################################\n\n    # \u8fd9\u91cc\u7684 example_input \u4e5f\u53ef\u4ee5\u662f\u968f\u673a\u751f\u6210\u7684\u6570\u636e\uff0c\u4f46\u662f\u63a8\u8350\u4f7f\u7528\u771f\u5b9e\u6570\u636e\uff0c\u4ee5\u63d0\u9ad8\n    # \u6027\u80fd\u6d4b\u8bd5\u7684\u51c6\u786e\u6027\n    example_input = next(iter(eval_data_loader))[0]\n\n    # \u901a\u8fc7 trace \u5c06\u6a21\u578b\u5e8f\u5217\u5316\u5e76\u751f\u6210\u8ba1\u7b97\u56fe\uff0c\u6ce8\u610f\u6a21\u578b\u548c\u6570\u636e\u8981\u653e\u5728 CPU \u4e0a\n    script_model = torch.jit.trace(quantized_model.cpu(), example_input)\n    torch.jit.save(script_model, os.path.join(model_path, "int_model.pt"))\n\n    # \u6a21\u578b\u68c0\u67e5\n    check_model(script_model, [example_input])\n\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"\n    torch.Size([1, 3, 32, 32])\n    /home/users/horizon/qat_docs/horizon_plugin_pytorch/qtensor.py:1178: TracerWarning: Converting a tensor to a Python boolean might cause the trace to be incorrect. We can't record the data flow of Python values, so this value will be treated as a constant in the future. This means that the trace might not generalize to other inputs!\n    if scale is not None and scale.numel() > 1:\n    /home/users/horizon/qat_docs/horizon_plugin_pytorch/nn/quantized/conv2d.py:290: TracerWarning: Converting a tensor to a Python boolean might cause the trace to be incorrect. We can't record the data flow of Python values, so this value will be treated as a constant in the future. This means that the trace might not generalize to other inputs!\n    per_channel_axis=-1 if self.out_scale.numel() == 1 else 1,\n    This model is supported!\n    HBDK model check PASS\n\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'\n    # \u6a21\u578b\u7f16\u8bd1\uff0c\u751f\u6210\u7684 hbm \u6587\u4ef6\u5373\u4e3a\u53ef\u90e8\u7f72\u7684\u6a21\u578b\n    compile_model(\n        script_model,\n        [example_input],\n        hbm=os.path.join(model_path, "model.hbm"),\n        input_source="pyramid",\n        opt=compile_opt,\n    )\n\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"\n    INFO: launch 16 threads for optimization\n    [==================================================] 100%\n    WARNING: arg0 can not be assigned to NCHW_NATIVE layout because it's input source is pyramid/resizer.\n    consumed time 0.655841\n    HBDK model compilation SUCCESS\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'\n    # \u6a21\u578b\u6027\u80fd\u6d4b\u8bd5\n    perf_model(\n        script_model,\n        [example_input],\n        out_dir=os.path.join(model_path, "perf_out"),\n        input_source="pyramid",\n        opt=compile_opt,\n        layer_details=True,\n    )\n\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"\n    INFO: launch 16 threads for optimization\n    [==================================================] 100%\n    WARNING: arg0 can not be assigned to NCHW_NATIVE layout because it's input source is pyramid/resizer.\n    consumed time 0.587685\n    HBDK model compilation SUCCESS\n        FPS=2655.57, latency = 376.6 us, DDR = 2481312 bytes   (see model/mobilenetv2/perf_out/FxQATReadyMobileNetV2.html)\n    HBDK model compilation SUCCESS\n    HBDK performance estimation SUCCESS\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'\n    # \u6a21\u578b\u53ef\u89c6\u5316\n    visualize_model(\n        script_model,\n        [example_input],\n        save_path=os.path.join(model_path, "model.svg"),\n        show=False,\n    )\n\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"\n    INFO: launch 1 threads for optimization\n    consumed time 0.424022\n    HBDK model compilation SUCCESS\n\n"})})]})}function _(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(s,{...n})}):s(n)}},34905:(n,e,t)=>{t.d(e,{A:()=>a});const a=t.p+"assets/images/quick_start-16f36df6b97d556cfba4e570b03fd4a2.svg"},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>c});var a=t(96540);const o={},i=a.createContext(o);function r(n){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);